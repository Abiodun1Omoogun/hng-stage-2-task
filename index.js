const fs = require('fs');
const express  = require('express');
const  _ = require('lodash');
const  { v4: uuid } = require('uuid');
const cors  = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
    origin: "+"
}))

//  GET API
app.get('/me', (req, res) => {

    res.status(200).json({
        shirt: "blue",
        hair: "black",
    })
});

// POST API
app.post('/api/calculations', (req, res) => {
   const { operation_type, x, y } = req.body;
   let result;

   if (operation_type === "addition") { 
        result = x + y;
    } else if  (operation_type === "subtration") {
        result = x - y;
    } else if  (operation_type = "multiplication") {
        result = x * y;
   } else {
        result = "Invalid";
    }
   res.
   status(200).
   json({slackUsername: "emmalex12", operation_type: operation_type, result: parseInt(result)});
})


// PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Api is running ${PORT}.....`));