import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';


const CardPost = () => {
  const [title, setTitle] = useState(' Card title');
  const [content, setContent] = useState('This is a wider card with supporting text below...');
  const [author, setAuthor] = useState('Autor');
  const [createdAt, setCreatedAt] = useState('Last updated 3 mins ago');
  const [comments, setComments] = useState([]);
  /*useEffect(() => {
    // Puedes cargar los datos del servidor aquí usando fetch o axios
    // Ejemplo ficticio:
    fetch('https://api.tu-servidor.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
        setCreatedAt(data.createdAt);
        setComments(data.comments);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // El array vacío indica que este efecto se ejecuta solo una vez al montar el componente
*/
const navigate = useNavigate();

 const handleNewPost = () => {
  // Lógica para manejar un nuevo post
  console.log('Nuevo post creado');
};

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCreatedAtChange = (event) => {
    setCreatedAt(event.target.value);
  };

  /*Para comentarios*/
  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica para enviar el comentario al servidor si lo necesitas
    const newComment = {
      author: 'Usuario', // Puedes cambiarlo por el nombre del usuario registrado
      content: event.target.comment.value,
    };
    setComments([...comments, newComment]);
    event.target.reset();
  };
  const handleEditPost = () => {
    // Lógica para editar el post
    console.log('Editar post');
  };

  const handleDeletePost = () => {
    // Lógica para eliminar el post
    console.log('Eliminar post');
    navigate('/EliminarPost');
  };

  const handleEditComment = (index) => {
    // Lógica para editar el comentario en la posición 'index'
    console.log(`Editar comentario en la posición ${index}`);
  };

  const handleDeleteComment = (index) => {
    // Lógica para eliminar el comentario en la posición 'index'
    console.log(`Eliminar comentario en la posición ${index}`);
  };

   return (
    <>
    
  
    <Card className="bg-dark text-white" border="black" style={{ marginTop: '20px', position: 'relative' }}>
      <Card.Img src="holder.js/100px270" alt="Imagen" />
      <Card.ImgOverlay>
        <br />
        <Card.Title style={{ color: 'black' }}>
          Titulo:<FormControl type="text" value={title} onChange={handleTitleChange} />
        </Card.Title>
        <Card.Text style={{ color: 'black' }}>
          Texto:<FormControl as="textarea" rows={3} value={content} onChange={handleContentChange} />
        </Card.Text>
        <Card.Text style={{ color: 'black' }}>
          Autor: <FormControl type="text" value={author} onChange={handleAuthorChange} />
        </Card.Text>
        <Card.Text style={{ color: 'black' }}>
          Creado: <FormControl type="text" value={createdAt} onChange={handleCreatedAtChange} />
        </Card.Text>
        <Button variant="primary" onClick={handleEditPost}>
          Editar Post
        </Button>{' '}
        <Button variant="danger" onClick={handleDeletePost}>
          Eliminar Post
        </Button>{' '}
        <ListGroup>
          {comments.map((comment, index) => (
            <ListGroup.Item key={index}>
              <strong>{comment.author}</strong>: {comment.content}
              <Button variant="info" onClick={() => handleEditComment(index)}>
                Editar Comentario
              </Button>{' '}
              <Button variant="danger" onClick={() => handleDeleteComment(index)}>
                Eliminar Comentario
              </Button>{' '}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <form onSubmit={handleCommentSubmit}>
          <FormControl type="text" name="comment" placeholder="Deja un comentario..." />
          <Button variant="success" type="submit">
            Añadir Comentario
          </Button>{' '}
        </form>
      </Card.ImgOverlay>
    </Card>
    </>
  
  );


};


export default CardPost;