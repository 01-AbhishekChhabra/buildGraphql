
import { resolvers } from './resolvers';
import { makeExceutableSchema } from 'graphql-tools';

const typeDefs = `
    
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        age: Int
        email: String
        contacts: [Contact]
    }

    type Contact {
        firstName: String
        lastname: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }


    input ContactInput {
        firstName: String
        lastname: String
    }


    type Mutation {
        createFriend(input: FriendInput): Friend
    }


`;


const schema = makeExceutableSchema({ typeDefs, resolvers});

export { schema };
