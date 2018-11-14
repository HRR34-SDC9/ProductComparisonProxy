const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/product/:id", (req, res) => {
  const file = path.join(`${__dirname}/public/index.html`);
  res.sendFile(file);
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
