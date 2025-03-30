const app = require("./src/app");

app.listen(3000, (err) => {
  if (err) return console.log("Error while connecting to server");
  console.log("Server running on port 3000");
});
