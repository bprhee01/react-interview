import {studentInfo} from "../../utils/types";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'

interface Props {
    studentInfo: studentInfo;
}


export default function Student(props: Props){
    return(
        <div>
            {/* {props.studentInfo.courseId} */}
            Name: {props.studentInfo.fullName}
            <Link href={`/student/${props.studentInfo.id}`}> <Button variant="contained">More Info</Button> </Link>
            
        </div>
    )
}