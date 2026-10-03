import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import taskcontext from './context10/taskcontext';
import homescreen from './screens10/homescreen';
import detailsscreen from './screens10/detailsscreen';
import application from './screens10/application';



import { StyleSheet } from "react-native";



const Stack = createNativeStackNavigator();  
export default function App(){
    const[employee,setEmployee]=useState({});
    const[employees,setEmployees]=useState([]);
    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[hours,setHours]=useState();
    const[salary,setSalary]=useState();

    const clearEmployees=()=>{
        setEmployees([]);
    }

    
    const countEmployees=()=>{
        let count=0;
        for(let i=0;i<employees.length;i++){
            count=count+1;
        }
        return count;

    }
 

    const sumHours=()=>{
        let sum=0;
        for(let i=0;i<employees.length;i++){
            sum=sum+employees[i].hours;
        }
        return sum;
    }

    
    
    
    const avgsalary=()=>{
        let sum=0;
        for(let i=0;i<employees.length;i++){
            sum=sum+employees[i].salary;
        }
        return (sum/countEmployees());
    }
   

    constSalaryInOsb=(id)=>{
       
        let sal=0;
        for(let i=0;i<employees.length;i++){
            if(employees[i].id==id){
               sal=( (employees[i].salary)/4);
               return sal;
            }
            
        }

    }




    const addEmployee=(id,name,hours,salary)=>{
        setEmployees([...employees,{id:id,name:name,hours:hours,salary:salary}]);
    
    }

    const delet=(id)=>{
            setEmployees(employees.filter((obj)=>obj.id!=id))
        
    }

   

const sharedData={employeese,employeeses,id,setId,name,hours,setHours,setName,salary,avgsalary,setEmployee,setEmployees,countEmployees,delet,addEmployee,setSalary,sumHours}
    return (
        <taskcontext.Provider value={sharedData}>
            <NavigationContainer>
                <Stack.Navigator  initialRouteName="Details">
                    <Stack.Screen name="Home" component={homescreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Details" component={detailsscreen} options={{ headerShown: false }} />
                    <Stack.Screen name="app" component={application} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </taskcontext.Provider>






    )

}

const styles = StyleSheet.create({

});