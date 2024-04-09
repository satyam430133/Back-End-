const express = require('express');
const app = express();
const port=4000;
app.get('/',(req,res)=>{
    res.send([{
        name:'Call of Duty Black Ops',
        rating:"*****",
        price:39.00,
        detail:"lorem ispam dolar sit amet consecter adipising elit sed do eliused tempor indicitent ut urban is not here for this thing alina.",
      },
      {
        name:'Apex Legends',
        rating:"*****",
        price:29.00,
        detail:"lorem ispam dolar sit amet consecter adipising elit sed do eliused tempor indicitent ut urban is not here for this thing alina.",
      }]);
    res.end()
})
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
});