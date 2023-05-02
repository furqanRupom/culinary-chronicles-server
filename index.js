const express = require('express');
const app = express();
const cors = require('cors')
const chefInformation = require('./chef/chef')
const port = process.env.PORT || 4000
app.use(cors())
app.get('/',(req,res)=>{
    res.send(chefInformation);
})

app.listen(port,()=>{
    console.log(`Culinary Chronicles website is running on port ${port}`)
})