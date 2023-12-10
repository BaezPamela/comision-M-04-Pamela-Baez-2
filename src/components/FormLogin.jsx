import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useNavigate }from 'react-router-dom';

const FormLogin =() => {
  const [userName,setuserName] = useState('');
  const [Email, setEmail ] = useState('');
  const [Password, setPassword ] = useState('');
  const [deshabilitarBoton, setDesHabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();
  
  //ver si agrgo aca para modificar avatar
  
  const modificaruserName = (e) => {
    setuserName (e.target.value);
  }
  
  const modificarEmail = (e) => {
   setEmail  (e.target.value);
    
}
  
  const modificarPassword = (e) => {
  setPassword(e.target.value);
  
}
  
  const realizarLogin= async () => {
    let misErrores = {}
    if (userName.length ===0) { 
      misErrores.userName ='Debe introducir al menos un nombre';
    }
   
    if (Email.length ===0) { 
    misErrores.Email='Debe introducir al menos un correo electronico';
    }
   
    if (Password.length ===0) { 
      misErrores.Password = 'Debe introducir el password';
    }
    
    setErrores(misErrores);
    
    if(Object.entries(errores).length === 0){
      setDesHabilitarBoton(true);
    
      console.log(Email);
      console.log(Password);
      console.log(userName);

      await enviarDatos();
    }
   
  }
const enviarDatos = async () => {
  const url = 'http://localhost:3000/usuario';

  const datos = {
    userName: userName,
    Email: Email,
    Password: Password,
  }
  const respuesta =await axios.post(url, datos);

  if(respuesta.status === 200) {
       return navigate('/');
    }else{
    setErrores({
      error:'Ocurrio un error inesperado'})
  }
  setDesHabilitarBoton(false);
}
  return (
    <Form>
       <Form.Group className="mb-3" controlId="formBasicUserName">
       <Form.Label>Nombre de Usuario</Form.Label>
       <Form.Control type="text" onInput={modificaruserName} />
       {errores.userName && (
      <span style={{ color: 'red' }}>{errores.userName}</span>
    )}
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email"  onInput ={modificarEmail}/>
        {errores.Email && (
      <span style={{ color: 'red' }}>{errores.Email}</span>
    )}
        <Form.Text className="text-muted">
          
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"onInput ={modificarPassword} autoComplete="current-password" />
        {errores.Password && (
      <span style={{ color: 'red' }}>{errores.Password}</span>
    )}
      </Form.Group>
      {
        errores.error &&(
      <Alert  variant="warning">
         {errores.error } 
        </Alert>
        )
      } 
      
      <Button variant="primary" type="submit"onClick={realizarLogin} disabled = {deshabilitarBoton}>
        Enviar
      </Button>
    </Form>
  );
}

export default FormLogin ;