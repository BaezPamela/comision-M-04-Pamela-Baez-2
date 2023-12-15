import { createBrowserRouter,} from "react-router-dom";
/*importo mis vistas*/
import Inicio from './views/Inicio.jsx';
import Login from './views/Login.jsx' ;
import Post from './views/Post.jsx';
import EliminarPost from './views/EliminarPost.jsx';
import EditarPost from './views/EditarPost.jsx';
import Registrarse from './views/Registrarse.jsx';
import NewPost from './views/NewPost.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Inicio />,
    },{
        path: "/Login",
        element: <Login/>,
      },{
        path: "/Post",
        element: <Post/>,
      },{
        path:"/NewPost",
        element:<NewPost/>,
      },{
        path: "/eliminar/:id",
        element:<EliminarPost/>,
      },{
        path: "/editar/:id",
        element:<EditarPost/>,
      },{
        path:"/Registrarse",
        element:<Registrarse/>,
      },
  
  


  ]); 
 
 export {router};