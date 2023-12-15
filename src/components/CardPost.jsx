import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const CardPost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [deshabilitarBoton,setDeshabilitarBoton] = useState(false);
  const [errores,setErrores] = useState({});
  
const navigate = useNavigate();
const{token } = useAuthContext();

 

  const manejarCambioTitle = (e) => {
    setTitle(e.target.value);
  };

  const manejarCambioDescription = (e) => {
    setDescription(e.target.value);
  };

  const verificarDatos= async () => {
       let misErrores = {}
    if (title.length ===0) { 
      misErrores.title ='Debe introducir el titulo';
    }
   
    if (description.length ===0) { 
    misErrores.description='Debe introducir una description';
    }
   
    
    setErrores(misErrores);
    
    if(Object.entries(errores).length === 0){
      setDeshabilitarBoton(true);
      await mandarDatos();
    
      
    }
 }
 const mandarDatos = async () => {
  const url = 'http://localhost:3000/post';

  const datos = {
    title: title,
     description: description ,
     
  }
  const headers ={
    token: token
  }
  try{
  const respuesta =await axios.post(url, datos, {headers: headers});

  if(respuesta.status === 200) {
       return navigate('/');
    }else{
      setErrores({error:'Ocurrio un error inesperado'})
  }
   }catch(error){
       setErrores({error:'Ocurrio un error inesperado'});
   }
  setDeshabilitarBoton(false)
  
  }
   return (
    <>
    <Card className="bg-dark text-white" border="black" style={{ marginTop: '20px', position: 'relative' }}>
      <Card.Img src="holder.js/100px270" alt="Imagen" />
      <Card.ImgOverlay>
        <br />
        <Card.Title style={{ color: 'black' }}>
          Title:<FormControl type="text" value={title} onInput={manejarCambioTitle} />
        </Card.Title>
        {
            errores.title && (
              <span style ={{color:'red'}}>
                {errores.title}
              </span>
            )
        }
        <Card.Text style={{ color: 'black' }}>
          Description:<FormControl as="textarea" rows={3} value={description} onInput={manejarCambioDescription} />
        </Card.Text>
        {
            errores.description && (
              <span style ={{color:'red'}}>
                {errores.description}
              </span>
            )
        }
        <Button variant="primary" onClick={verificarDatos} disabled={deshabilitarBoton}>
          Crear Post
        </Button>{' '}
      </Card.ImgOverlay>
    </Card>
    </>
  
  )
      
    
};
 


export default CardPost;