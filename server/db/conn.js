const mongoose = require('mongoose');

const DB ='mongodb+srv://prasoon2001:Prasoon2001@cluster0.9ewf75w.mongodb.net/RSweb?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=>console.log("error" + error.message))