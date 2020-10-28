import express from 'express';
import bodyParser from 'body-parser';
// import routes from './src/routes/index';
import { port, environment } from './config';

const app = express();

// db connection
// TODO

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${port} in ${environment} environment`)
);

app.listen(port, () =>
    console.log(`your server is running on port ${port} in ${environment} environment`)
);
