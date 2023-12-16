import{useState,useEffect} from 'react';
import {Button, Card,FloatingLabel,Form} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext.jsx';
import {
     traerDatosDePosteoPorId,
     traerComentariosDePosteoPorId } from '../utils/llamados';

const Ver = () => {
   const {id} = useParams();

   const[title , setTitle] = useState ('');
   const[description , setDescription] = useState ('');
   const[comments,setComments] = useState([]);
   const[miComments,setMiComments] = useState('');

   const {token} = useAuthContext();
   
   const traerDatos = async () => {
       const respuesta = await traerDatosDePosteoPorId(id);

       if(respuesta){
        setTitle(respuesta.title);
        setDescription(respuesta.description);

        await traerComentarios();
       }else{
        console.log('No se encontro un post con el id'+ id);

       }
   }
   const traerComentarios = async () => {
    const respuesta = await traerComentariosDePosteoPorId(id);
    if(respuesta){
        setComments(respuesta);
    }else{
        console.log('No se pudo obtener los comentarios');

    }
   }
   const enviarComment = async () => {
    const url = 'http://localhost:3000/comments';

    const datos = {
         description: miComments ,
         idPost:id,
      }
      const headers ={
        token: token
      }
      try{
      const respuesta =await axios.post(url, datos, {headers: headers});
    
      if(respuesta.status === 200) {
        setMiComments('');
          
        await traerComentarios();
        }else{
          setErrores({error:'Ocurrio un error inesperado'})
      }
       }catch(error){
           setErrores({error:'Ocurrio un error inesperado'});
       }
      setDeshabilitar
    console.log(miComments)
   }

   useEffect(() => {
    traerDatos();
   },[]);

   return (
    <Card.Body>
        <Card>
            <Card.Body>
                <Card.Title>{ title }</Card.Title>
                <Card.Text>
                    { description }
                </Card.Text>
                <Button variant="primary">
                    Editar
                </Button>
            </Card.Body>
        </Card>

        <br />

        <Card>
            <Card.Body>
                <Card.Title>Comentarios</Card.Title>
                <Card.Body>

                    {
                        comments.map((comments, key) => (
                            <div key={key}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{ comments.autor.userName + ' ' }</Card.Title>
                                        <Card.Text>
                                            { comments.description }
                                        </Card.Text>
                                        <Button variant="primary">
                                            Editar 
                                        </Button>
                                        <Button variant="danger">
                                            Eliminar 
                                        </Button>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </div>
                        ))
                    }

                    <br />

                    <Card>
                        <Card.Body>
                          <Card.Title>Agregar comentario</Card.Title>
                          <br/>
                          <FloatingLabel controlId="comments" label="Comments">
                            <Form.Control
                                onInput={(e) => setMiComments(e.target.value)}
                                value={miComments}
                                as="textarea"
                             placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                           />
                           </FloatingLabel>
                           <br/>
                        <Button variant="primary" onClick={enviarComment}>
                                Agregar
                        </Button>
                        </Card.Body>
                    </Card>
                            
                </Card.Body>
            </Card.Body>
        </Card>
    </Card.Body>
);
}


  
export default Ver;