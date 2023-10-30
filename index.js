import generateName from "sillyname";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render("index.ejs");
});


app.post("/submit", (req, res) => {
    // Generate random silly name
    let sillyName = generateName();

    // Display sillyname
    res.render("index.ejs", {
        sillyname: sillyName,
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});