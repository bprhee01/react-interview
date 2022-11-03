import {studentInfo} from "../../utils/types";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
const client = new PocketBase('http://127.0.0.1:8090');



export default function Record(props: any){
    const router = useRouter();
    const removeRecord = async(id: string) => {
        await client.records.delete('attendance', id);
        // router.refresh();
    }
    return(
        <div>
            Date: {props.date}
            Hours: {props.hours}
            <Button onClick={(e) => removeRecord(props.id)}> Remove Record</Button>
            {props.id}
        </div>
    )
}