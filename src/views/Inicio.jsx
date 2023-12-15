import Card from 'react-bootstrap/Card';
import { useAuthContext } from '../context/AuthContext';



const Inicio = () => {
  
  const{userName} = useAuthContext();

  return (
    <Card.Body>
      {userName ? ('Bienvenid@ ' + userName.userName) : 'No se inicio sesion'}
    
      <Card.Body>¡Hola! Soy Pamela,creadora de este espacio pensado para compartir mis experiencias y la de ustedes.
Desde hace 14 años viajo por el mundo y comparto mis aventuras en este blog. Acá vas a encontrar relatos, info útil de +70 países, reflexiones viajeras, y toda la inspiración que necesitás para animarte vos también a agarrar la mochila.
Me encanta que todos puedan compartir esos tips que nos son tan utiles.los leo!!</Card.Body>
      
 </Card.Body>
  )
}
     
       
    
export default Inicio
