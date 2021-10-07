const express = require("express");
const app = express();
const { menu } = require("./data");

app
.get("/" ,( req , res ) => {
    const allCategorys = ["all", ...new Set(menu.map((item) => item.category))]
    const allItems = menu.map((item)=> item.title)
    //   console.log(newMenu)
    console.log(allItems,allCategorys)
    res.json({allCategorys,allItems})
    // res.send()
})
.get("/api/menu", (req, res) => {
    const newMenu = menu.map((item) => {
      const { title, id} = item;
      return { title, id};
    });
    res.json(newMenu);
  })


  // This is to find a item by id
  .get("/api/menu/:id", (req, res) => {
    const { id } = req.params;
    const singleItem = menu.find((item) => {
      return item.id === Number(id);
    });
    if (!singleItem) {

      res.json({ results: [], message: "Item not Found" });

    }
    res.json({ results: [singleItem], message: "Item Found" });
    res.send("singleProduct");
  })


//   .get("/api/v1/query", (req, res) => {
//       const{price} = req.query
//     const items = menu.map((item) => {
//       const { title, price} = item;
//       return { title, price};
//     });

//     if(price === "asc")
//     items.sort(function(a,b) {return a-b})
//     res.json(items);
//   })
// .get("/api/menu/priceLow", (req, res) => {
//     const items = menu.map((item) => {
//       const { title, price} = item;
//       return { title, price};
//     });
//     items.sort(function(a,b) {return b-a})
//     res.json(items);
//   })




  .get("/api/v1/query", (req, res) => {
    const { search, prices } = req.query;

    let sortedItems = [...menu];
    if (search) {
      sortedItems = sortedItems.filter((item) => {
        return item.category.includes(search);
      });
    }
    if (sortedItems.length < 1) {
      return res.json({ results: [], message: "Items not found" });
    }
    if(prices === "asc") {
        sortedItems = sortedItems.sort((a, b) =>  b.price-a.price)

    }
    if(prices === "dec"){
        sortedItems = sortedItems.sort((a, b) =>  a.price-b.price)
    }

    console.log(sortedItems)
    res.json(sortedItems);
  })




.all('*',(req,res)=>{
    res.send("<h1>Page not found </h1>")
})
.listen(5000,console.log("Sever is Listening on port 5000"))