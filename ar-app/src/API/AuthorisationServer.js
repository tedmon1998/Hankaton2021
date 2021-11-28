import axios from 'axios'

export default class AuthorisationServer {

   static async getAuthorization(login, password) {
      
      let data = { "login": login, "password": password }

      const response = await axios.post('https://087a-79-120-2-164.ngrok.io/api/login', data)

      return response.data
   }

   static async getRegistration(username, name, lastName, email, password) {

      let data = { "username": username, "password": password, "real_name": name+lastName, "email": email }

      const response = await axios.post('https://087a-79-120-2-164.ngrok.io/api/signup', data)
      return response.data
   }
}