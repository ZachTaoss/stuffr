const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./public"));

app.use(express.urlencoded({ extend: false }));
app.use(express.json())

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  console.log(req.body)
  const { name } = req.body;
  if (name) {
    people.push({ name });
    return res.status(201).json({ person: name });
  }
  res.status(404).json({ success: false, msg: "Please Enter a name" });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).send(`Welcome ${name}`);
  }
  res.status(400).json({ success: false, msg: "please provide a name" });
});

app.put("/api/people/:id"),(req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person = people.find((each) => {
      return each.id === id;
    });
    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `no person with id ${id}` });
    }

    const newPeople = people.map((person) => {
      if (person.id === id) {
        person.name = name;
      }
      return person;
    });
    people = newPeople;
    res.status(202).json({ success: true, data: newPeople });
  };

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((each) => each.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.filter((person) => {
    return person.id !== Number(id);
  });
  people = newPeople;
  res.status(203).json({ success: true, data: newPeople });
});

app.listen(5000, () => console.log("sever is listening at port 5000"));
