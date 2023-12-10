import Card from 'react-bootstrap/Card';
import { useNavigate, useParams }from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';


const EliminarPost= () =>{
    const navigate = useNavigate();
    const {id} = useParams

const volver = () =>{
    navigate('/Post');
}

const eliminar = () =>{
//eliminar post

}

return(
    <Card.Body>
    <Alert variant="warning">
   Esta seguro que desea eliminar el post?
  </Alert>
  
        <Button variant="primary" size="sm" onClick ={volver}>
          Volver
        </Button>{' '}
        <Button variant="danger" size="sm" onClick={eliminar}>
          Eliminar
        </Button>
    </Card.Body>
)

}

export default EliminarPost;