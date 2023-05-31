import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/FirebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { ITeclados } from "../interfaces/ITeclados";


export const app = initializeApp(firebaseConfig)
export const condb = getFirestore(app)

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