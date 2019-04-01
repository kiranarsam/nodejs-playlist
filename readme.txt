Step one, get package.json
==> npm init

MVC :
======
                      CONTROLLER
                /                   \
              /    controls the APP   \
             /     Sections: e.g:      \
            /    -todoController        \
           /     -userController         \
        MODEL                           VIEW

    Data e.g:                       Template Files(EJS) - e.g:
    -TODOS                          -TODO.EJS
    -USERS                          -USERS.EJS


NoSQL Databases:
================
-> Alternative to SQL Databases
-> Store documents (JSON) in a db, instead of tables with rows and columns
-> Works really well with JavaScript (and therefore Node.js)

Storing JSON:
============
Examples

[
    {
        item:'one'
    },
    {
        item:'two'
    },
    {
        links: { todo: '/todo'}
    }
]

MONGODB (MongoDB):
===================
==> npm install mongoose -save


Future NODE.JS Tutorials:
=========================
-> MongoDB
-> MEAN stack app (MongoDB, Express, Angular, Node)
-> Unit testing with Mocha
-> Websockets 


