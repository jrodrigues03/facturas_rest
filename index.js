const express = require("express");
const cors = require("cors");
const mongo = require("mongodb");
const mongoClient = mongo.MongoClient;

const app = express();

app.use(cors());
app.use(express.json());

const port = 8080;
const connectionString = "mongodb+srv://johana-rodrigues12:Joha..12@clustercouse.orvh6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoClient.connect(connectionString, { useUnifiedTopology: true })
.then(client => {

    //código acceso a base de datos
    
    console.log("Conectado a la base de datos.");

    const factura = client.db("myFirstDatabase").collection("facturas");
   
    //GESTIÓN FACTURAS

    //crear facturas
app.post("/facturas", function(req, res){

    let factura = req.body;

    // inserta la factura en base de datos
    facturas.insertOne(factura).then(result => {
        console.log(result);
    }).catch(err => {
    }) ;
    
    response.send("ok");

});
// Recuperar facturas

app.get("/facturas/:facturaId", (req, res)=>{

    let facturaId = req.params.facturaId;
    let query = {_id: Number.parseInt (facturaId) };

    // recuperar la factura de la base de datos
factura.findOne(query).then( factura =>{
    res.json(factura);
}).catch(err =>{
    console.error(err);
})
})
    

});

//Recuperar factura por Id

app.get("/facturas/:facturaId", (request, response) => {

    let facturaId = request.params.facturaId;

    let o_id = new mongo.ObjectId(facturaId);
    let query = { _id: o_id };

    // recuperar la factura de la base de datos
    facturas.findOne(query).then(factura => {
        response.json(factura);
    }).catch(err => {
        console.error(err);
    });
});


// Actualizar factura
app.put("/facturas/:facturaId", function(req, res){

    let facturaId = req.params.facturaId;

    // Actualizacion de base de datos
    res.json();

});

// Borrar factura por id
app.delete("/facturas/:facturaId", (req, res)=>{

    let facturaId = req.params.facturaId;
    // borrar la factura base de datos
    res.json();

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

