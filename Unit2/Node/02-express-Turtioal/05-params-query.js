const express = require("express");
const app = express();
const { products } = require("./data");

app
  .get("/", (req, res) => {
    res.send('<h1>Home page</h1><a href="/api/products">products</a>');
  })
  .get("/api/products", (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image } = product;
      return { name, id, image };
    });
    res.json(newProducts);
  })
  .get("/api/products/:id", (req, res) => {
    //   console.log(req.params)
    const { id } = req.params;
    const singleProduct = products.find((product) => {
      return product.id === Number(id);
    });
    if (!singleProduct) {
      // res.status(404)
      // res.send('<h1>Product not found</h1>')
      res.json({ results: [], message: "Product not Found" });
    }
    res.json({ results: [singleProduct], message: "Product Found" });
    res.send("singleProduct");
  })

  .get("/api/v1/query", (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query;
    //...create a new nonmutable copy
    let sortedProducts = [...products];
    if (search) {
      sortedProducts = sortedProducts.filter((products) => {
        return product.name.includes(search);
      });
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
      return res.json({ results: [], message: "Product not found" });
    }

    res.json(sortedProducts);
  })

  //   const cats = products.map((product)=> product.cateogry)
  // const catsSet= new Set(cat);

  .all("*", (req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
  })
  .listen(5000, () => {
    console.log("Sever is listening on port 5000");
  });
