import {createContext,useContext, useState} from 'react';
import {guardarDatos,
        guardarToken,
        obtenerToken,
        obtenerDatos,
        limpiarLocalStorage,
        } from '../utils/logIn';

const AuthContext = createContext();

const AuthProvider =(props )=>{
    const {children}= props;
    
    const[userName,setUserName] = useState(obtenerDatos());
    const [token,setToken] = useState(obtenerToken());

    const login = (datos, token) =>{
        guardarDatos(datos);
        guardarToken(token);

        setUserName(datos);
        setToken(token);
    }
    
    const logout = () =>{
        limpiarLocalStorage();
        
        setUsuario(null);
        setToken(null);
    }
   
    return (
        <AuthContext.Provider value={{ userName,token, login, logout}}>
            { children}
        </AuthContext.Provider>
    );
}
 const useAuthContext = () => useContext(AuthContext);

 export{
    AuthProvider,
    useAuthContext,
 }