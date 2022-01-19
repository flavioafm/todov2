import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
//import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';
require('../../../util/database');
import User from '../../../models/User';
import Task from '../../../models/Task';
// import { useSetRecoilState } from 'recoil';
// import { userState } from '../../../atom/userAtom';

export default NextAuth({
    //Configure JWT
    session: {
        jwt: true,
    },
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                // //Connect to DB
                // const client = await MongoClient.connect(
                //     `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}-h8jpe.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
                //     { useNewUrlParser: true, useUnifiedTopology: true }
                // );
                // //Get all the users
                // const users = await client.db().collection('users');
                // //Find user with the email  
                // const result = await users.findOne({
                //     email: credentials.username,
                // });
                const result = await User
                    .findOne({email: credentials.username})
                    .select('+password')

                //Not found - send error res
                if (!result) {
                    //client.close();
                    throw new Error('No user found with the email');
                }
                //Check hased password with DB password
                const checkPassword = await compare(credentials.password, result.password);
                //Incorrect password - send response
                if (!checkPassword) {
                    //client.close();
                    throw new Error('Password doesnt match');
                }

                // const setUser = useSetRecoilState(userState);
                // setUser(result);

                //Else send success response
                //client.close();
                return { 
                    id: result.id,
                    name: result.name,
                    email: result.email 
                };
            },
        }),
    ],
    callbacks: {
        // async jwt({ token, account, user }) {
        //     return {
        //         ...token,
        //         accountId: account.providerAccountId
        //     }
        // },
        async session({ session, token }) {
            session.user.id = token.sub;
            return session;
        }
    }
});