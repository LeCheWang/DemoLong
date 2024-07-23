const express = require('express');
const app = express();

const connectDB = require('./configs/database');
const router = require('./routers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./uploads"));

connectDB();
router(app);

app.listen(5000, () => {
  console.log('server run at port 5000');
});
// category 1-n product
