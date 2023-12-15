import{useState,useEffect} from 'react';
import {Button, Card,FloatingLabel,Form} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { traerDatosDePosteoPorId } from '../utils/llamados';

const Ver = () => {
   const {id} = useParams();

   const[title , setTitle] = useState ('');
   const[description , setDescription] = useState ('');

   const traerDatos = async () => {
       const respuesta = await traerDatosDePosteoPorId(id);

       if(respuesta){
        setTitle(respuesta.title);
        setDescription(respuesta.description);
       }else{
        console.log('No se encontro un post con el id'+ id);

       }
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
                        comentarios.map((comentario, key) => (
                            <div key={key}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{ comentario.autor.apellidos + ' ' + comentario.autor.nombres }</Card.Title>
                                        <Card.Text>
                                            { comentario.description }
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
                            <Card.Title>Agregar Comentario</Card.Title>
                            <br />
                            <FloatingLabel controlId="comentario" label="Comentario">
                                <Form.Control
                                    onInput={(e) => setMiComentario(e.target.value)}
                                    value={miComentario}
                                    as="textarea"
                                    placeholder="Ingrese un comentario"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <br />
                            
                            <Button variant="primary" onClick={enviarComentario}>
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