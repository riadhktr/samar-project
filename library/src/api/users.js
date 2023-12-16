import axios from 'axios';
import { getCookie } from '../helpers/cookies';
// liste des api pour un utilisateur 

// get all books(get) 
export const getUserOrder = async()=>{
    const {data} = await axios.get('http://localhost:5000/library/books')
     return data
}

// rate book(put)
export const rateBook = async(values)=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.put("http://localhost:5000/api/rate",{...values},config)
     return data 
}
export const getbook = async()=>{
    const {data} = await axios.get('http://localhost:5000/book/get')
     return data
}

// wishlist api 
export const addToFav = async(bookID)=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.put("http://localhost:5000/api/wish",bookID,config)
     return data 
}
// get user wishList 
export const myFavList = async()=>{
    const token =  getCookie("token")
    const config = {
        headers:{
            
            'Authorization':token
            
        }
    }
    const {data}= await axios.get("http://localhost:5000/api/myList",config)
     return data 
}



// create shopping card(post)

// finish order(post)



//register w login (nafess el api lel user w admin)


