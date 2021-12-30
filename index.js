const { resolvers } = require('./resolvers.js');
const app = require('express')();
const schema  = require('./schema.js');
const { graphqlHTTP } = require('express-graphql');


app.get("/", (req, res) => {
    res.send("up to running with graphql")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("server is running on port 4000")
})