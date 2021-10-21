const mongoose = require(`mongoose`);

// const mongo_url = "";

// mongoose
//     .connect(mongo_url)
//     .then(()=>console.log(`connected to DB...`))
//     .catch((err) => console.log(err))

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log(`connect to DB ...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;

/*
  How to visualize a Mongo DB
    
  Cluster => Whole libray => NYC libray 
    
    Database 1 => Books in the libray 
      
      Collection 1 => Ficton
        
        Document 1 => Harry potter
        Document 2 => Eragon
      
      Collection 2 => NON-Fiction
        
        Document 1 => Presiendts in History 
        Document 2 => Cooking books 

    Database 2 => Videos in the libray 
    ...
    Database 3 => Everone that has a libray card 
    ...
*/