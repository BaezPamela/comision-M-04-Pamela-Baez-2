import Card from 'react-bootstrap/Card';
import {  useParams }from 'react-router-dom';

import { useAuthContext } from '../context/AuthContext.jsx';
import FormEditar from '../components/FormEditar.jsx';


const EditarPost = () => {
    const{ id} = useParams();

    const {token,usuario} = useAuthContext();

    
  
    return (
    
         <Card.Body>
         
          <FormEditar id={id} usuario={usuario} token={token}/>
          
        </Card.Body>
    )
}
    
export default EditarPost;
