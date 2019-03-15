const Express = require('express');

const app = Express();


//render static content
app.use('/static', Express.static(__dirname + '/public/static-content'));

const user = {
    firstName: String,
    secondName: String,
    user_id: Date.now(),
    birthday: Date
}

const userList = [];
userList.push({
    firstName: "fn",
    secondName: "sn",
    birthday: new Date('December 17, 1995 03:24:00')
});
userList.push({
    firstName: "fn2",
    secondName: "sn2",
    birthday: new Date('December 18, 1995 03:24:00')
});


app.get('/getusers', (req, res) => {


    if (userList.length != null) {

        userList.forEach(element => {
            let userList = [];
            userList.push(element);

        });
        res.send(userList);

    } else {
        res.status(404);
    }
})


app.listen(3000);