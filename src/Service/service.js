import axios from 'axios';


const url = 'https://api-alien.herokuapp.com/aliens';

export async function saveUser(userData){
    try {
        const response = await axios({
            url:url,
            method:'POST',
            data:userData
        })
    } catch (error) {
        console.log(error);
    }
}