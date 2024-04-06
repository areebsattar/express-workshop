import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Yay Node Girls!");
});

app.get("/node", (req, res) => {
  res.send("You have typed node as endpoint");
});

app.get("/girls", (req, res) => {
    res.send("You have reached the girls endpoint!");
});

app.use(express.static(""))
app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
