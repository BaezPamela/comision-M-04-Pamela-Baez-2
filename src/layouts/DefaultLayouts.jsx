import {Card} from 'react-bootstrap';

import Home from './../components/Home.jsx';

const DefaultLayout = ({children}) => {
  
  return (
    <>
     <Home />
     
     <div style ={{ padding: 20}}>
       <Card>
         {children}
       </Card>
     </div>
     </>
  )
}
     
       
    
export default DefaultLayout