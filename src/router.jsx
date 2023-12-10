import { createBrowserRouter,} from "react-router-dom";
/*importo mis vistas*/
import Inicio from './views/Inicio.jsx';

import Login from './views/Login.jsx' ;

import Post from './views/Post.jsx';

import EliminarPost from './views/EliminarPost.jsx';

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
        path: "/EliminarPost/:id",
        element:<EliminarPost/>,
      }
  
  


  ]); 
 
 export {router}