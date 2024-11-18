const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Product {
        _id: ID!          
        name: String!
        description: String!
        price: Float!
        brand: String!
        imgs: [String]
    }

    type Total {
        subtotal: Float!
        iva: Float!
        total: Float!
    }

    type Shopping {
        _id: ID!
        user: [User!]!
        product: [Product!]!
        total: [Total!]!
        estatus: String!
        createAt: String!
        closed: String 
    }

    type Query {
        shoppingActive(userId: ID!): Shopping
        shoppingAll(userId: ID!): [Shopping]
    }

    type Mutation {
        createShopping(
            user: [UserInput!]!,
            product: [ProductInput!]!,
            total: [TotalInput!]!, 
            estatus: String!, 
            createAt: String!
        ): Shopping

        addProductShopping(
            _id: ID!, 
            productId: ID!
        ): Shopping

        deleteProductShopping(
            _id: ID!, 
            productId: ID!
        ): Shopping

        updateShopping(
            _id: ID!,
            user: [UserInput!],
            product: [ProductInput!],
            total: [TotalInput!],
            estatus: String,
            createAt: String,
            closed: String
        ): Shopping
    }

    input UserInput {
        _id: ID!
    }

    input ProductInput {
        _id: ID!
    }

    input TotalInput {
        subtotal: Float!
        iva: Float!
        total: Float!
    }
`;

module.exports = typeDefs;