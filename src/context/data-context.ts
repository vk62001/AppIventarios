import { createContext } from "react";

type Data=  {
    products : any,
    getProducts : (producst:any)=>void
};


export const DataContext = createContext<Data>({
    products: undefined,
    getProducts: ()=>{}
})
