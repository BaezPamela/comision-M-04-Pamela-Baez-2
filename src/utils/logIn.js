//funcion para guardar los datos
export const guardarDatos = (datos) =>{
    const valorTexto = JSON.stringify(datos);
     
    localStorage.setItem('usuario',valorTexto);
}
//funcion para guardar token
export const guardarToken =(token) =>{
    localStorage.setItem('token', token);

}
//funcion para obtener token
export const obtenerToken = () =>{
    return localStorage.getItem('token')
}
//funcion para obtener los datos
export const obtenerDatos = () => {
    const datos = localStorage.getItem('usuario');

    return  JSON.parse(datos);
}
// funcion para limpiar el localStorage y hacer logOut
export const limpiarLocalStorage = () =>{
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
}