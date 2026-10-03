import { createContext } from "react";
const TaskContext = createContext({
carts: [],
AddCarts: () => {},
clearCarts: () => {},
countCart:()=>{},
cart:{},
countCarts:()=>{},
decrease:()=>{}



});
export default TaskContext;
