const express = require('express');
const path = require('path'); 
const app = express();


const port = 3419;
app.listen(port, () => {
    console.log("Escuchando en puerto "+port);
});

const static = express.static("public");
app.use(static);


const mainRouter = require('./routes/main-routes');
app.use('/',mainRouter);

//npm run dev
//http://localhost:3419/