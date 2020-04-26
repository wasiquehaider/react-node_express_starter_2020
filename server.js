const express = require("express");

const app = express();

app.get("/api/avengers", (req, res) => {
  const avengers = [
    { id: 1, firstName: "Tony", lastName: "Stark", supName: "Ironman" },
    {
      id: 2,
      firstName: "Steve",
      lastName: "Rogers",
      supName: "Captain America",
    },
    { id: 3, firstName: "Bruce", lastName: "Banner", supName: "Hulk" },
  ];
  res.json(avengers);
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Server is running on port : ${PORT}`));
