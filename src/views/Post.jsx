import Card from 'react-bootstrap/Card';
import{useState, useEffect} from 'react'; 
import { useAuthContext } from '../context/AuthContext';
import Posteos from '../components/Posteos.jsx';

const Post = () => {
  
  const [lista, setLista] = useState([]);
   
  const {userName} = useAuthContext();

  const cargarLista = async () => {
    const url = 'http://localhost:3000/posts';

      let respuesta = await fetch(url);

      if (respuesta.status ===200){
        respuesta = await respuesta.json();

        setLista(respuesta);
      }

  }

  useEffect(() => {
    cargarLista();
  },[]);

  return (
    
         <Card.Body>
         
         <Posteos lista={lista} />
        
         </Card.Body>
      
  )
}
     
       
    
export default Post;
