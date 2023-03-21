const { gql } =require('apollo-server-express');

const typeDefs = gql`
  input SaveBookInput {
    author: [author!]
    description: String
    title: String!
    bookId: ID!
    image: Boolean
    link: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBook: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: Boolean
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(usename: String!, email: String!, password: String!): Auth
    saveBook(input: SaveBookInput): User
    removeBook(bookId: ID!): User
  }
`

module.exports = typeDefs;