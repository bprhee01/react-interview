import { useEffect, useState } from "react";
import { setLocalStorageItem,getLocalStorageItem } from "../../utils/localStorage";
import defaultValues from "../../mock/defaultValues";
import {studentInfo} from "../../utils/types";
import Student from './Student';

async function getStudents() {

  const res = await fetch('http://127.0.0.1:8090/api/collections/students/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();

  if (!getLocalStorageItem('students')) setLocalStorageItem('students', data.items)
  return data?.items as any[];
}

export default function StudentList(){
    const [students, setStudents] = useState([]);
   


    useEffect(() => {

        const callStudents = async() => { await getStudents()}

        callStudents();
        setStudents(getLocalStorageItem("students"));


    }, []);
        
    
    
    
    return(
        <div>
            <h1>Student List</h1> 
            {students.map((studentInfo, index: number) => <Student studentInfo={studentInfo} key={index} />)}
        </div>
    )
}