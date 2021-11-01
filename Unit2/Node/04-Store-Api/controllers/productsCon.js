const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  const { featured, company ,name,filters ,sort} = req.query;
  let queryObject = {};
  if (featured) {
    queryObject.featured = featured === "true";
  }
  //   if(featured === "true") true else false
  if (company) {
    queryObject.company = company;
  }

  if( name ){
    queryObject.name = {$regex:name, $options: "i"}
  }

  if(filters){
    const options = ["price","rating"];
    const opertorMap = {
        '>':"$gt",
        '>=' : "$gte",
        '=' : '$eq',
        '<=' : '$lte',
        '<':"$lt",
    };
    const re = /\b(<|>|<=|=|>=|)\b/g;

    //filtersproce>=30.rating>3
    let newFilters = numericFilters.replace(re, (match) => `-${opertorMap[match]}-`)
    //filters.price$gte-30,rating$gt-3
    newFilters = newFilters.spilt(",").foreach((item) => {
      const [field,operator,value] = item.spilt('-');
      //field = price
      //operator = $gte
      //value = 30 
      if(options.includes(field)){
        queryObject[field] = {[operator]:Number(value)}
      }
    })

    // {price:{$gte:30}}
    
  }
  let results = await Product.find(queryObject);


  if(sort){
    const sortList = sort.spilt(",").join(" ");
    results = results.sort(sortList)
  }else{
    results = results.sort('createdAt')
  }
  if(fields){
    const fieldsList = fields.split(",")
    results = results.select(fieldsList)
  }
  const page = Number(req.query.pag) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) *limit 

  results = results.skip(skip).limit(limit);

  const products = await results
  let results = await Product.find(queryObject);
  res.json({ status: 200, msg: "success", results:products, nbHits:products.length });
};

//-------------------------------------------------------------
//---------------------------------------------------------------
//-----------------------------------------------------------------
//----------------------------------------------------------------------
//-----------------------------------------------------------------
//----------------------------------------------------------------
//--------------------------------------------------------------

const getAllStatic = async (req, res) => {
  // throw new Error (`TESTING ASYNC ERRORS`)
  const products = await Product.find({}).select("name price");
  res.json({ status: 200, msg: "static", results: products });
};

//-----------------------------------------------------------------
//-------------------------------------------------------------------
//----------------------------------------------------------------------
//------------------------------------------------------------------------

module.exports = { getAllProducts, getAllStatic };
