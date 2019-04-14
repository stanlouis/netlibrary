const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

app.use(helmet());
app.use(morgan('short'));
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => `Server is listening on port ${port}`);
