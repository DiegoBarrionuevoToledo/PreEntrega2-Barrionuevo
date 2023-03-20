import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWSPx_0uw6hetJMfqsF77biwMa1FGZbiQ",
  authDomain: "tienda-de-discos.firebaseapp.com",
  projectId: "tienda-de-discos",
  storageBucket: "tienda-de-discos.appspot.com",
  messagingSenderId: "205200876635",
  appId: "1:205200876635:web:0b76cfdf6249f959cacb7e"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <ChakraProvider>
     
     <App />
     
   </ChakraProvider>

  </React.StrictMode>,
)
