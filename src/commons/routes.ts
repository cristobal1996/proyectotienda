import {  HomePage,RatonesPage, TecladosPage, MousepadPage, InformacionPage,LoginPage } from '../pages/Index';

type JSXComponet = () => JSX.Element;

interface Route {
    path: string;
    component: JSXComponet;
    name: string;
    iden?:string;
    children?: Route[]
}

export const routes: Route[] = [
    {
         path: '/home',
         component: HomePage,
         name: ''
     },
    {
        path: '/Ratones',
        component: RatonesPage,
        name: 'Ratones'
    },
    {
        path: '/Teclados',
        component: TecladosPage,
        name: 'Teclados'
    },
    {
        path: '/Mousepad',
        component: MousepadPage,
        name: 'Mousepad'
    },
    {
        path: '/Login',
        component: LoginPage,
        name: 'Login'
    },
    {
        path: '/Informacion',
        component: InformacionPage,
        name: ''
    },
    // {
    //     path: 'Registrar',
    //     component: RegistrarPage,
    //     name: ''
    // }
]