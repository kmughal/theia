const app = require("express")()

app.get("*", (req, res) => res.send("hello world"))

app.listen(4000, () => console.log("connected"))
