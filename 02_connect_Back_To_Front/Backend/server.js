import express from 'express';

const app = express();

/*
app.get('/', (req,res)=>{
    res.send('server is ready');
});
*/

//get a list of 5 jokes

app.get('/jokes' , (req,res)=>{
    const jokes_list = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },

        {
            id:2,
            title:'Another joke',
            content: 'this is another joke'
        },
        {
            id: 3,
            title: 'Yet another joke',
            content: 'This is yet another joke'
        },
        {
            id: 4,
            title: 'Funny joke',
            content: 'This is a funny joke'
        },
        {
            id: 5,
            title: 'Final joke',
            content: 'This is the final joke'
        }
    ];

    res.send(jokes_list);
})

const port = process.env.PORT||3000;

app.listen(port, ()=>{
    console.log(`server is running on port :${port}`);
});