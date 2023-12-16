import axios from 'axios';
const url ='http://localhost:3000/';

const traerDatosDePosteoPorId= async (id) =>{
    const  endpoint = url + 'post/' + id;

    try{
        const respuesta = await axios.get(endpoint);

        if(respuesta.status === 200){
            return respuesta.data;
        }else{
            return false;
        }
    }catch (error){
        return false;
    }
}

const traerComentariosDePosteoPorId = async (idPost) => {
    const  endpoint = url + 'comments/' + idPost;

    try{
        const respuesta = await axios.get(endpoint);

        if(respuesta.status === 200){
            return respuesta.data;
        }else{
            return false;
        }
    }catch (error){
        return false;
    }
}
export{
    traerDatosDePosteoPorId,
    traerComentariosDePosteoPorId,
}