import '../styles/globals.css';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import defaultValues from '../mock/defaultValues';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localStorage';



const App = ({ Component, pageProps }: AppProps) => {
 

  return <Component {...pageProps} />
}

export default App;
