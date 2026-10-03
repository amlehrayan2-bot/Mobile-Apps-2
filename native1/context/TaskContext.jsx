import { createContext } from "react";
const TaskContext = createContext({
tasks: [],
addTask: () => {},
clearTasks: () => {},
count:0,
setCount: () => {}

});
export default TaskContext;