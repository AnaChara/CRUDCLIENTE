const { gql } = require('apollo-server');

const typeDefs = gql`
    type Address {
        street: String
        zip: String!
        city: String
        state: String
        country: String
    }

    type Customer {
        _id: ID! 
        legal_name: String!
        tax_id: String!
        tax_system: String!
        email: String!
        password: String!
        address: Address!
        registrationDate: String
        userType: String
        preferredPaymentMethod: [String!]
    }
    
    type Query {
        customers: [Customer]!
    }

    type Mutation {
        createCustomer(
            legal_name: String!,
            tax_id: String!,
            tax_system: String!,
            email: String!,
            password: String!,
            address: AddressInput!
        ): Customer!
        
        updateCustomer(
            _id: ID!,
            legal_name: String,
            tax_id: String!
            tax_system: String!
            email: String,
            password: String,
            address: AddressInput,
            userType: String,
            preferredPaymentMethod: [String]
        ): Customer!
        
        deleteCustomer(_id: ID!): Customer!
    }
    
    input AddressInput {
        street: String
        zip: String!
        city: String
        state: String
        country: String
    }
`;

module.exports = typeDefs;