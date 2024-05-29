const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const pool = require('./src/dbconfig/db.config');
const merchantLoggingRoutes = require('./src/routes/merchantLogging.routes');
const userLoggingRoutes = require('./src/routes/userLogging.routes');
const products = require('./src/routes/products.routes');

const iOS = require('./src/routes/iOSTest.routes');

const app = express();
app.use(cookieParser());
app.use(express.json());

// Enable this in case of CORS error at clients end.
// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     credentials: true,
//   }),
// );

const port = process.env.PORT || "3001";
app.listen(port, (err)=>{
    if(err){
        console.log( err );
        throw err;
    }
    else{
        console.log(`Server is running at port: ${port}`);
    }
});

app.use('/api/merchantLogging', merchantLoggingRoutes);
app.use('/api/userLogging', userLoggingRoutes);
app.use('/api/products', products);
app.use('/api/iOS', iOS);