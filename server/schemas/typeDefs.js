const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
    me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput!): User
        removeBook(bookId: Int!): User
    }

    type User {
        _id: Int!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: Int!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    input BookInput {
        authors: [String]
        description: String!
        title: String!
        bookId: Int!
        image: String
        link: String
    }

    type Auth {
        token: String!
        user: User
    }
`;

module.exports = typeDefs;