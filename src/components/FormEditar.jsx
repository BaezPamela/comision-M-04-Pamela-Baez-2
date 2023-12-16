import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

import { traerDatosDePosteoPorId } from '../utils/llamados';


const FormEditar = (props) => {
    const { id, token} = props;
    const url = 'http://localhost:3000/post'
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({});
  
  
  
const navigate = useNavigate();

 
  const manejarCambioTitle = (e) => {
    setTitle(e.target.value);
  };

  const manejarCambioDescription = (e) => {
    setDescription(e.target.value);
  };

   
  const verificarDatos = async () => {
     let misErrores = {}
     
     if (title.length ===0){
      misErrores.title ='Introduzca un titulo';

     }
     if(description.length ===0){
      misErrores.description ='Debe introducir una descripcion';
     }
  

     setErrores(misErrores);
     
     if(Object.entries(misErrores).length === 0){
      setDeshabilitarBoton(true);

      await mandarDatos();
     }
  }  
  const mandarDatos = async () => {
    
     const datos = {
      id: id,
      title: title,
      description: description,
    }
    const headers ={
      token : token
    }
   
    try{
    const respuesta =await axios.put(url, datos, {headers:headers});
  
    if(respuesta.status === 200) {
         return navigate('/');
      }else{
        setErrores({error:'Ocurrio un error inesperado'})
    }
  }catch(error){
    setErrores({error:'Ocurrio un error inesperado'});
  }
    setDeshabilitarBoton(false);
  }
  
  const traerDatos = async () =>{
    if(usuario) {

    const respuesta = await traerDatosDePosteoPorId(id);

    if(respuesta){
        if(usuario.id !== respuesta.autor){
          return navigate('/')
        }
      
      setTitle(respuesta.title);
      setDescription(respuesta.description);
    }else{
      setErrores({ error:'Ocurrio un error inesperado.No se pudo obtener el post'});
      setDeshabilitarBoton(true);
    }
  }else{
    return navigate('/')
  }
}
 
  useEffect(() =>{
    traerDatos();
  },[]);
   
  return (
    <>
      <Card className="bg-dark text-white" border="black" style={{ marginTop: '20px', position: 'relative' }}>
      <Card.Img src="holder.js/100px270" alt="Imagen" />
      <Card.ImgOverlay>
        <br />
        <Card.Title style={{ color: 'black' }}>
          Titulo:<FormControl type="text" value={title} onInput={manejarCambioTitle} />
          {
            errores.title &&(
              <span style ={{ color:'red'}}>{errores.title}
              </span>
            )
          }
        
          </Card.Title>
        <Card.Text style={{ color: 'black' }}>
          description:<FormControl as="textarea" rows={3} value={description} onInput={manejarCambioDescription} />
          {
            errores.description &&(
              <span style ={{ color:'red'}}>{errores.title}
              </span>
            )
          }
        </Card.Text>
        {
                errores.error && (
                    <Alert variant="warning">
                        {errores.error}
                    </Alert>
                )
            }
        <Button variant="primary" onClick={verificarDatos} disabled = {deshabilitarBoton}>
          Editar Post
        </Button>
        
       </Card.ImgOverlay>
    </Card>
    </>
  
  );


};


export default FormEditar;