const express = require("express");

const app = express();
const PORT = 3000;

const items = [
    {
        id: 1,
        meal: "Adobo",
        price: "P65"
    },
    {
        id: 2,
        meal: "Fried Chicken",
        price: "P75"
    },
    {
        id: 3,
        meal: "Buwad",
        price: "P15"
    }
];

app.get("/api/items", (req, res)=>{
    res.json(items);
});

//retrieve individual data

app.get("/api/items/:id", (req, res)=>{
    const id = Number(req.params.id);
    const item = items.find(item =>
        item.id === id
    );

    if(!item){
        return res.status(404).json({
            message: "Item not Available"
        });
    }

    res.json(item);

});


app.use(express.static(__dirname));
app.listen(PORT, ()=>{
 console.log(`Server running at http://localhost:${PORT}`);   
});