import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useAuthContext } from '../context/AuthContext';

const Home = () => {
  
  const {userName, logout} = useAuthContext();

  const desconectarUsuario =() => {
   logout();
  }

  const backgroundImageStyle = {
    backgroundImage: 'url("https://img.freepik.com/foto-gratis/mujer-sombrero-sentado-playa-sillas-hermosa-playa-tropical-mujer-relajandose-playa-tropical-isla-koh-nangyuan_335224-1110.jpg?size=626&ext=jpg&ga=GA1.1.593660341.1694623615&semt=sph")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };
  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    opacity: 0.6, 
  };

  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Mi Blog Viajero </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            {
              userName ? (
                <>
                <Nav.Link href="/Post">Post</Nav.Link>
                < Nav.Link href="/NewPost">NewPost</Nav.Link>
                <Nav.Link onClick={desconectarUsuario}>Logout</Nav.Link>
                </>
              ):(
                <>
                < Nav.Link href="/Registrarse">Registrarse</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                
                </>
              )
            }
            
         )
            
          </Nav>
          <Image
            src="https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300490/97923644-signo-de-inicio-de-sesi%C3%B3n-de-avatar-de-icono-de-usuario-bot%C3%B3n-de-c%C3%ADrculo-con-vector-de-fondo.jpg"  // Reemplaza con la URL de tu imagen de avatar
            roundedCircle
            style={{ marginLeft: '10px', width: '50px', height: '50px' }}  // Ajusta el tamaño aquí
          />
        </Container>
      </Navbar>
      <div style={{ ...backgroundImageStyle, ...overlayStyle }}></div>
      </div>
    
  );
}

export default Home;