import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Posteos = (props) => {
    const {lista} = props;
    
    const navigate = useNavigate();
    
    const ver =(id) => {
       navigate('/ver/' + id);
    
    }
    
    const editar =(id) => {
        navigate('/editar/' + id);

    }
    
    const eliminar = (id) => {
        navigate('/eliminar/' + id);
    }

    return (
     <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Autor</th>
              <th>Acciones</th>
            </tr>
          </thead>
        <tbody>
         
            {lista.map ((item,key) => (
                <tr key ={key}>
                    <td>{key + 1}</td>
                    <td>{item.title}</td>
                    <td>{'Autor'}</td>
                    <td>
                       <ButtonGroup >
                          <Button style={{ marginRight: '5px' }}variant="success" onClick={() => ver(item._id)}>
                            Ver Post
                          </Button>
                          <Button style={{ marginRight: '5px' }}variant="primary"onClick={() => editar(item._id)}>
                              Editar
                           </Button>
                           <Button variant="danger"onClick={() => eliminar(item._id)}>
                              Eliminar
                           </Button>
                        </ButtonGroup>
                    </td>
                 </tr>
              ))}
               </tbody>
     </Table>
        
    );
};
       
 


                    
                
            
       
   
export default Posteos  
    
