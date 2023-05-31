import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { firebaseConfig } from "../config/FirebaseConfig";
import { initializeApp } from "firebase/app";
import IRatones from '../interfaces/IRatones';
import { nanoid } from "nanoid";
import Dratones from '../datos/Dratone.json';


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const getRatones = async ():Promise<IRatones[]> => {
     let ratones: IRatones[] = [];
         const ratonesRef = collection(db, "ratones");
         const ratonesDocs = await getDocs(ratonesRef);
         ratonesDocs.forEach( doc => {
             const ratones2 = { ...doc.data() }
             ratones.push(ratones2 as IRatones)
        })
        console.log(ratones)
        return ratones;
}

export const newRatones = async (data: IRatones) => {
    try{
        console.log('no se que poner', data);
        const newData = {codigo: nanoid(20), ...data};
        const docRef = doc(db, "ratones", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}

export const subirRatones = async () => {
     try {
         console.log(' cargar ');
         Dratones.map( async (Dratone) =>{
            const codigo = nanoid(20);
             const docRef = doc(db, "ratones", codigo);
             await setDoc(docRef, { codigo: codigo, ...Dratone})
        })
     }catch (error){
         console.log(error)
     }
 }

 export const borrarRatones = async (codigo: string) =>{
    try {
        const delRef = doc(db, "ratones", codigo);
        await deleteDoc(delRef);
    } catch (error) {
        console.log(error)
    }
 }