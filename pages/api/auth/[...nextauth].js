import axios from "axios"
import NextAuth from "next-auth"

export const authOptions = {  
  providers: [
    CredentialsProvider({
        name: "Credentials",
        async authorize(credentials) {
            const res = await axios.post('http://localhost:3000/api/auth/sigin', credentials)       
                       
            const user = res.data

            if (user) {
                return user
            } else {
                throw '/auth/signin?i=1'
            }
        }
    })    
  ],

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  }
}

export default NextAuth(authOptions)