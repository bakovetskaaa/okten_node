// Events
//
// const events = require('node:events');
//
// const eventEmitter = new events();
//
// eventEmitter.on('click', (data)=>{
//     console.log(data);
// })
//
// eventEmitter.emit('click', {data: "hi"})
//--------------------------------------------------------------------------------------------------------------------//

// Stream
//
// const fs = require('fs');
// const path = require('path');
//
// const readStream = fs.createReadStream('text.txt', {highWaterMark:15});
// const writeStream = fs.createWriteStream('chunks.txt')
//
// // readStream.on('data', (chunk)=>{
// //     writeStream.write(chunk);
// // })
//
// readStream.pipe(writeStream)

// Express

const express = require('express')
const fileService = require('./file.service');

const users =[
    {
    name: 'Oleh',
    age: 20,
    gender: 'male'
},
    {
        name: 'Olia',
        age: 10,
        gender: 'female'
    },
    {
        name: 'Vania',
        age: 50,
        gender: 'male'
    }
]

const app = express()


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.get('/users', async (req, res) => {
    const users = await fileService.readDB()
    res.json(users)
})

// app.get('/users/:id', (req, res) => {
//     const {id} = req.params;
//     res.status(200).json(users[+id])
// })
//
// app.post('/users', (req, res) => {
//     users.push(req.body);
//     res.status(201).json({
//         message: "User created!"
//         }
//     )
// })
//
// app.put('/users/:id', (req, res)=>{
//     const { id } = req.params;
//
//     users[+id] = req.body;
//
//     res.status(200).json({
//         message: 'User updated',
//         data: users[+id],
//     })
// })
//
// app.delete('/users/:id', (req, res)=>{
//     const { id } = req.params;
//
//     users.splice(+id, 1);
//
//     res.status(200).json({
//         message: 'User deleted',
//     })
// })


const PORT = 5001

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})


