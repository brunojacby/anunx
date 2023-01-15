import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({  
  providers: [      
    CredentialsProvider({        
      name: 'Credentials',
      async authorize(credentials) {
        await axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials)        

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
    strategy: 'jwt',
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },

  database: process.env.MONGODB_URI,
})