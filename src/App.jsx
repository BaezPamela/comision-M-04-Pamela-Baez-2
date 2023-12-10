import {RouterProvider} from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayouts.jsx";

import { router } from "./router.jsx";

const App= () => {
  
  return (
    <DefaultLayout>
     <RouterProvider router ={router} />
     </DefaultLayout>
  )
}
     
       
    
export default App
