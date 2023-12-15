import {Card, Form, Button, Alert} from 'react-bootstrap';
import{useState} from 'react';
import { useNavigate }from 'react-router-dom';
import axios from 'axios';

import{ guardarDatos,guardarToken } from '../utils/logIn';
import {useAuthContext} from '../context/AuthContext';

const Login = () => {
  const [userName,setUserName]= useState('');
  const[password,setPassword] =useState('');
  const[errores,setErrores]= useState('');
  const [deshabilitarBoton, setDesHabilitarBoton] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuthContext();

  const modificaruserName = (e) => {
    setUserName (e.target.value);
  }
  
   const modificarPassword = (e) => {
   setPassword(e.target.value);
   
 }
 
 const verificarDatos= async () => {
  let misErrores = {}
  
     if (userName.length ===0) { 
         misErrores.userName ='Debe introducir al menos un nombre';
      }
 
     if (password.length ===0) { 
         misErrores.password = 'Debe introducir el password';
      }
      
     if(Object.entries(misErrores).length === 0){
      setDesHabilitarBoton(true);
      
      await mandarDatos();
     }
   
    }

    const mandarDatos = async () => {
      const url = 'http://localhost:3000/autenticar';
    
      const datos = {
        userName: userName,
        password: password,
      }
      try{
        const respuesta =await axios.post(url, datos);
    
        if(respuesta.status === 200) {
          
         const{ datos, token} = respuesta.data;

         login(datos,token);
         navigate('/');
         
        }else{
          setErrores({error:'Los datos ingresados no son validos'})
        }
     }catch(error){
      setErrores({error:'Ocurrio un error inesperado'});
     }
      setDesHabilitarBoton(false);
    }
      
      return (
    
         <Card.Body>
         <Form>
       <Form.Group className="mb-3" controlId="UserName">
       <Form.Label>Nombre de Usuario</Form.Label>
       <Form.Control type="text" placeholder="userName"onInput={modificaruserName} />
       {
       errores.userName && (
      <span style={{ color: 'red' }}>
        {errores.userName}
        </span>
      )}
       </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"placeholder="Password" onInput ={modificarPassword} autoComplete="current-password" />
        {errores.Password && (
      <span style={{ color: 'red' }}>
        {errores.Password}
        </span>
      )}
      </Form.Group>
      {
        errores.error &&(
          <Alert  variant="warning">
            {errores.error } 
          </Alert>
        )
      } 
      
      <Button variant="primary" type="button"onClick={verificarDatos} disabled = {deshabilitarBoton}>
        Ingresar
      </Button>
    </Form>
 </Card.Body>
  )
 }
  

     
       
 
export default Login