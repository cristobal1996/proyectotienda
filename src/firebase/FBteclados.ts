import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/FirebaseConfig";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { ITeclados } from "../interfaces/ITeclados";
import { nanoid } from "nanoid";
import Dteclados from '../datos/Dteclado.json'


export const app = initializeApp(firebaseConfig)
export const condb = getFirestore()

export const getTeclados = async (): Promise<ITeclados[]> => {
    let teclados: ITeclados[] = [];
    const tecladosRef = collection(condb, "teclados");
    const TecladosDocs = await getDocs(tecladosRef);
    TecladosDocs.forEach(doc => {
        const teclados2 = { ...doc.data() }
        teclados.push(teclados2 as ITeclados)
    })
    console.log(teclados)
    return teclados;
}

export const newTeclados = async (data: ITeclados ) => {
    try{
        const newData = {codigo: nanoid(20), ...data};
        const docRef = doc(condb, "teclados", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}

export const cargarTeclados = async () => {
    try{
        Dteclados.map(async (Dteclado) => {
            const codigo = nanoid(20);
             const docRef = doc(condb, "teclados", codigo);
             await setDoc(docRef, { codigo: codigo, ...Dteclado})
        })
    }catch(error){
        console.log(error)
    }
}

export const borrarTeclados = async (codigo: string) =>{
    try {
        const delRef = doc(condb, "teclados", codigo);
        await deleteDoc(delRef);
    } catch (error) {
        console.log(error)
    }
 }