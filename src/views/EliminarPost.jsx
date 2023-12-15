import {useState} from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams }from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const Eliminar= () =>{
  const[error,setError]= useState(false);
  const [deshabilitarBoton, setDesHabilitarBoton] = useState(false);
  
  const navigate = useNavigate();
  const {id} = useParams();

const volver = () =>{
    navigate('/Post');
}

const eliminar = async () =>{
  setError(false);
setDesHabilitarBoton(true);

try{
  const url = 'http://localhost:3000/post';
  const respuesta = await axios.delete(url, {data: {id:id}});
     
  if (respuesta.status === 200){
    return navigate ('/Post');

  }else{
    setError('Ocurrio un error inesperado');
  }

}catch(error){
  setError('Ocurrio un error inesperado');
}
setDesHabilitarBoton(false);
}

return(
    <Card.Body>
    <Alert variant="warning">
   Esta seguro que desea eliminar el post?
  </Alert>
  {
    error &&(
      <Alert variant="danger">
   {error}
  </Alert>
    )
  }
  
        <Button variant="primary" size="sm" onClick ={volver}disabled = {deshabilitarBoton}>
          Volver
        </Button>{' '}
        <Button variant="danger" size="sm" onClick={eliminar}disabled = {deshabilitarBoton}>
          Eliminar
        </Button>
    </Card.Body>
)

}

export default Eliminar;