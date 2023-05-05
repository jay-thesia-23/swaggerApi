const express = require("express");
const faker = require("faker");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const randomId = require("random-id");
var app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

var dataProducts = [
  {
    id: "1",
    name: faker.name.findName(),
    email: faker.internet.email(),
    product: faker.commerce.productName(),
  },
  {
    id: "2",
    name: faker.name.findName(),
    email: faker.internet.email(),
    product: faker.commerce.productName(),
  },
  {
    id: "3",
    name: faker.name.findName(),
    email: faker.internet.email(),
    product: faker.commerce.productName(),
  },
];

//post

app.get("/api/productshow", (req, res) => {
  res.json(dataProducts);
});

app.post("/api/productadd", (req, res) => {
  const data = req.body.product;
  data.id = randomId(10);
  dataProducts.push(data);
  res.json(dataProducts);
});

app.delete("/api/productdelete/:id", (req, res) => {
  let id = req.params.id;

  console.log(id, "idddd");
  let products = datalet.filter((curr) => {
    return curr.id != id;
  });
  res.json(products);
});

app.put("/api/productupdate/:id", (req, res) => {
  let id = req.params.id;

  let updatedProduct = req.body.product;
  dataProducts = dataProducts.map((curr) => {
    if (curr.id == id) {
      curr = updatedProduct;
    }
    return curr;
  });

  res.json(dataProducts);
});

app.listen("5050", () => {
  console.log("app is running on port 5050 swagger api");
});
