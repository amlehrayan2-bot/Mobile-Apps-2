
import { createContext } from "react";


const taskcontext=createContext ({
    courses:[],
    setCourses:()=>{},
    addCourse:()=>{},
    clearCourse:()=>{},
    countCourse:()=>{},
   // countTask:()=>{},
    setCourse:()=>{},
    course:{},
    num:'',
    setNum:()=>{},
    name:'',
    setName:()=>{},
    hours:0,
    setHours:()=>{},
    grade:0,
    setGrade:()=>{},
    delet:()=>{},
    gradeAll:()=>{},
    hoursAll:()=>{},




});

export default taskcontext;


