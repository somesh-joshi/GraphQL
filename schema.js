const buildSchema = require("graphql").buildSchema;

const schema = buildSchema(`
    type worker {
        id: ID
        title: Stack_title
        description: String
        emp: [empinfo]
    }
    type empinfo {
        name: String
        experience: Int
        expAs: String
    }  

    enum Stack_title {
        maid
        cook
        driver
        cleaner
        caretaker
    }

    type Query {
        getWorker(id: ID): worker
    }

    input inputWorker {
        id: ID
        title: Stack_title!
        description: String!
        emp: [inputEmp]
        
    }

    input inputEmp {
        name: String!
        experience: Int!
        expAs: String!
    }

    type Mutation {
        addWorker(input: inputWorker): worker
    }

`)

module.exports = schema;
 