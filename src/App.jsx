import {RouterProvider} from "react-router-dom";
import {AuthProvider} from './context/AuthContext.jsx';
import DefaultLayout from "./layouts/DefaultLayouts.jsx";

import { router } from "./router.jsx";

const App= () => {
  
  return (
    <AuthProvider>
      <DefaultLayout>
        <RouterProvider router ={router} />
      </DefaultLayout>
   </AuthProvider>
  );
}
     
       
    
export default App
