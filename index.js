const express = require('express');
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
app.get('/',(req,res)=>{
    res.send('hello people')
})
app.use(cors())

app.listen(port,()=>{
    console.log(`Culinary Chronicles website is running on port ${port}`)
})