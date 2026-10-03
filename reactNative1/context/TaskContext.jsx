import { createContext } from "react";
const TaskContext = createContext({
tasks: [],
addTask: () => {},
clearTasks: () => {},
});
export default TaskContext;