import { compare } from 'bcrypt';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import users from '../../../src/models/users';
import dbConnect from '../../../src/utils/dbConnect';
import axios from 'axios';

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
      async authorize(credentials) {
        const res = await axios.post(`http://localhost:3000/api/auth/signin`, credentials)        

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
  },

  callbacks: {
    async jwt (token, user) {
      if (user) {
        token.uid = user.id;
      }
  
      return Promise.resolve(token)
    },

    async session(session, user) {
      session.userId = user.uid
      return session
    }
  },

  database: process.env.MONGODB_URI,
})