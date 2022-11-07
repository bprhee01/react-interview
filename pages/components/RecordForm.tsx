import Button from '@mui/material/Button';
import {useState} from "react";
import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');


export default function RecordForm(props){
    const [hours, setHours] = useState(0);

    const submitForm = async () => {
        const data = {
            studentId: props.studentId,
            hours: hours,
            date: new Date()
        }
        await client.records.create('attendance', data);
        props.toggleRefresh(!props.refresh);
    }

    return(
        <form>
        Hours: <input onChange={(e) =>  {setHours(Number(e.target.value))}}type="text"/>
        <Button onClick={(e) => submitForm()}> Submit
        </Button>
        </form>
    )
}