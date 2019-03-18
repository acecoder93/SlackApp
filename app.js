const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// importing chatkit
const Chatkit = require('@pusher/chatkit-server')

// Initiating Chat Kit instance
const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:c8186c98-afd1-4109-a9a6-4c9d7e7c088d',
    key: 'f2f56198-42d9-4597-a141-d35bbeb67b5e:wi9gbiw57o9pDtiagXfMsUvNUJYeDbp45pZF1TOJF44=',
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

// creating chatkit user
app.post('/users', (req,res)=>{
    const { username } = req.body
    chatkit
        .creatUser({
            id: username,
            name: username
        })
        .then(()=> res.sendStatus(201))
        .catch(error =>{
            if (error.error === 'services/chatkit/user_already_exists'){
                res.sendStatus(200)
            }
            else {
                res.status(error.status).json(error)
            };
        });
});

// authentication
app.post('/authenticate', (req,res)=>{
    const authData = chatkit.authenticate({ userId: req.query.user_id})
    res.status(authData.status).send(authData.body)
})

const PORT = 3001
app.listen(PORT, err =>{
    if (err) {
        console.error(err)
    } else{
        console.log(`Running on port ${PORT}`)
    }
});

