const express = require('express');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger');
const router = require('./routers/export-router');
const mongoose = require('mongoose');
const cors = require('cors');

const options = {
    customJs: '/custom.js'
  };

mongoose.connect('mongodb://localhost:27017/sales-funnels', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (error) => {
    if (!error) {
        console.log('success')
    } else {
        console.log('error');
    }
})

const app = express()
app.use(cors());
const port = process.env.PORT || 8080
app.use(express.json())
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use('/order', router.emailsRouter);

app.use('/', (req, res) => {
    res.send(`server is on port ${port}`)
});

app.listen(3000, () => {
    console.log('server on port ' + 3000)
})
