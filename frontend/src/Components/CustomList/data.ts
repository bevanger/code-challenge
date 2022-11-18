import  uuid  from 'react-uuid';

     const data = 
        [ {id: uuid(), name: "clean", description: "clean house", status: "complete", viewed: true },  
          {id: uuid(), name: "shop", description: "shop for groceries", status: "in progress", viewed: true },
          {id: uuid(), name: "doctor", description: "make doctors appointment", status: "archived", viewed: false },
          {id: uuid(), name: "dinner", description: "make dinner", status: "on hold", viewed: true },
          {id: uuid(), name: "friends", description: "have friends over for dinner", status: "new", viewed: true }
        ]
export default data;