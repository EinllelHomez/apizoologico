const express = require('express')
const app = express()
const port = 4040

app.get('/prueba', (req, res)=>{
    res.send('Hola Mundo!!!')

})

app.listen(port, ()=> {
    console.log('La aplicacion se esta ejecutando por el puerto' + port)
    
})