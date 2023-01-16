import { compare } from 'bcrypt';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import users from '../../../src/models/users';
import dbConnect from '../../../src/utils/dbConnect';

export default NextAuth({  
  providers: [    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),

    CredentialsProvider({        
      name: 'Credentials',
      async authorize(credentials, req) {
        dbConnect().catch(error => {error: "Connection Failed...!"})
           
        const result = await users.findOne({email: credentials.email})
           if (!result) {
            throw '/auth/signin?i=1'
        } 

        // const checkPassword = await compare(credentials.password, result.password)

        if (result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match")
        }

        return result

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