
var bodyParser = require('body-parser');
//https://mlab.com
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<input: mongodb-cluster db path>?retryWrites=true', {useNewUrlParser: true});

//Create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);

/*
var itemOne = Todo({item:'Buy Flowers'}).save(function(err){
    if (err) {
        console.log("Got Error while saving the data in mongoDB");
    }
    else {
        console.log('Item Saved in todos Database, in respective todo collection');
    }
});
*/

var urlEncodedParser = bodyParser.urlencoded({extended:false});


module.exports = function(app){

    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to view
        Todo.find({}, function(err, data) {
            if (err) {
                console.log('Error occurred while retreiving from mongodb ');
            }
            else
            {
                console.log('GET: Populating todo list mongodb to front-end app');
                res.render('todo', {todos:data});
            }
        }); 
    });

    app.post('/todo', urlEncodedParser, function(req, res){

        //get data from the view and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) {
                console.log('Error occurred while adding item into mongodb ');
            }
            else{
                console.log('POST: Populating todo list mongodb to front-end app');
                res.json(data);
            }
        });
    });

    app.delete('/todo/:item', function(req,res){
        //delete the requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data) {
            if(err) {
                console.log('Error occurred while deleting item into mongodb ');
            }
            else{
                console.log('DELETE: Populating todo list mongodb to front-end app');
                res.json(data);
            }
        });
    });
};