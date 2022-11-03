import { Container } from '@mui/material';
import {useEffect} from 'react';
import defaultValues from '../mock/defaultValues';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';
import StudentList from './components/StudentList';

// async function getStudents() {

//   const res = await fetch('http://127.0.0.1:8090/api/collections/students/records?page=1&perPage=30', { cache: 'no-store' });
//   const data = await res.json();
//   console.log(data.items)
//   if (!getLocalStorageItem('students')) setLocalStorageItem('students', data.items)
//   return data?.items as any[];
// }

export default function Home() {


  return (
    <Container sx={{
      display: 'grid',
      placeItems: 'center',
      width: '100vw',
      height: '100vh',
    }}>
      <StudentList/>
    </Container>
  )
}
