module.exports = function(req, res){
    app.post('/api/auth', function(req, res){
        let users = [{"username": "kevin", "birthday": "18/07/1997", "age": 25, "email": "kevin.pho@email.com", "password": "yep"},
        {"username": "yeji", "birthday": "01/01/2000", "age": 22, "email": "yeji@email.com", "password": "nope"},
        {"username": "dahyun", "birthday": "01/01/1998", "age": 24, "email": "dahyun@email.com", "password": "maybe"}]

        // making customer object
        var customer = {};
        customer.username = "";
        customer.birthday = "";
        customer.age = 0;
        customer.email = "";
        customer.password = "";
        customer.valid = false;

        for (let i = 0; i < users.length; i++) {
            if (req.body.username == users[i].email && req.body.upassword == user[i].password) {
                customer.username = users[i].username;
                customer.birthday = users[i].birthday;
                customer.age = users[i].age;
                customer.email = users[i].email;
                customer.password = users[i].password;
                customer.valid = true;
            }
        }
        res.send(customer);
    });
}
