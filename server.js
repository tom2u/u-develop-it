const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const urlencodedParser = express.urlencoded({ extended: false });
const jsonParser = express.json();

// Express middleware

app.use(urlencodedParser);
app.use(jsonParser);

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
