const nanoid = require('nanoid');

class  worker {
     constructor(title, description, emp) {
          this.id = nanoid();
          this.title = title;
          this.description = description;
          this.emp = emp;
     }     
}

const workerholder = {};

const resolvers = {
    getworker: ({ id }) => {
        return new worker(title, description, emp); 
    },
    addworker: ({ input }) => {
        let id = nanoid();
        workerholder[id] = new worker(input.title, input.description, input.emp); 
        return new worker(id,input);
    },
}


module.exports = resolvers;

