const express = require('express');
const dotenv = require('dotenv');

// Load environment vars.
dotenv.config({ path: './config.env' });
const app = express();


// If in development mode, set CORS headers so localhost:4200 can access api.
if (process.env.MODE === 'development') {
  app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:4200']);
    res.append('Access-Control-Allow-Methods', 'GET');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
}


// Profile routes.
app.use('/api/v1/profile', require('./routes/profile'));


// If in production mode, serve built frontend from output folder.
if (process.env.MODE === 'production') {
  const clientPath = '/public';
  const getClientFunc = (req, res) => { res.sendFile(__dirname + `${clientPath}/index.html`); };
  app.use(express.static(`.${clientPath}`));
  app.get('/', getClientFunc);
  app.get('/*', getClientFunc);
}



app.listen(process.env.PORT, () => {
  console.log(`${process.env.MODE} mode - Server listening on port ${process.env.PORT}!`);
});