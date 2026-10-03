import { createContext } from "react";


const taskContext=createContext ({
    carts:[],
    setCarts:()=>{},
    Addcarts:()=>{},
    clearCarts:()=>{},
    countCarts:()=>{},
    countCart:()=>{},
    dec:()=>{},
    inc:()=>{},


});

export default taskContext;