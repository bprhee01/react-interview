import { useRouter } from 'next/router'
import { Container, setRef } from '@mui/material';

import  {useState, useEffect} from 'react';
import PocketBase from 'pocketbase';
import Record from '../components/AttendanceRecord';
import getTotalAttendance from '../../utils/getTotalAttendance';
import RecordForm from '../components/RecordForm';
const client = new PocketBase('http://127.0.0.1:8090');

async function getStudent(studentId?: string) {
    const queryString = `http://127.0.0.1:8090/api/collections/students/records/${studentId}`;
    console.log(`2323`, queryString)
  const res = await fetch(queryString);

  const data = await res.json();
  return data;
    
}

async function getAttendanceRecords(studentId: string){
    const attendanceRecords = await client.records.getList('attendance', 1, 50, {
        filter: `studentId="${studentId}"`
    });
    console.log(attendanceRecords.items);
    return attendanceRecords.items;

}

const StudentPage = () => {
    
  const router = useRouter()
  const { id } = router.query
  const [studentInfo, setStudentInfo] = useState({});
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [attendanceHours, setAttendanceHours] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const getStudentInfo = async(stuId: string) => {
        if(!stuId) return;
        const student = await getStudent(`${stuId}`);
        setStudentInfo(student)

        const newAttendanceRecords = await getAttendanceRecords(`${stuId}`)
        setAttendanceRecords(newAttendanceRecords);
        const newAttendanceHours = getTotalAttendance(newAttendanceRecords);
        setAttendanceHours(newAttendanceHours)
    }

    if(!id) return;
    getStudentInfo(id);
  
  }, [id,refresh])

  return (
    <div>
        <h1> studentId: {id}</h1>
        <h1>name: {studentInfo.fullName} </h1>
        <h1>totalAttendance: {attendanceHours} </h1>
        <RecordForm studentId={id} refresh={refresh} toggleRefresh={setRefresh}/>
        <h1>Attendance Records</h1>
        <Container sx={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
    }}>

        {attendanceRecords.length? <h2>{attendanceRecords.map((attendanceRecord: any, index: number) => <Record id={attendanceRecord.id} date={attendanceRecord.date} hours={attendanceRecord.hours} refresh={refresh} toggleRefresh={setRefresh} key={index} />)}</h2> : null}
    </Container>
    </div>

  )
}

export default StudentPage;
