const express = require('express'), path = require('path');

const app = express();

app.use(express.static('./dist/ng6'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'/dist/ng6/index.html'));
})

app.listen(process.env.PORT || 808, () => {
  console.log('Server started');
})


