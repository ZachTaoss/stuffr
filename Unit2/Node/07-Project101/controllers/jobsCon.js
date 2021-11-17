// const { StatusCodes } = require("http-status-codes");
// const { BadRequestError } = require("../error/index.js");
// const jobSchema = require("../models/job-mod.js");

// const getAllProducts = async (req, res) => {
//   const { featured, company ,name,filters ,sort} = req.query;
//   let queryObject = {};
//   if (featured) {
//     queryObject.featured = featured === "true";
//   }
//   //   if(featured === "true") true else false
//   if (company) {
//     queryObject.company = company;
//   }

//   if( name ){
//     queryObject.name = {$regex:name, $options: "i"}
//   }

//   if(filters){
//     const options = ["price","rating"];
//     const opertorMap = {
//         '>':"$gt",
//         '>=' : "$gte",
//         '=' : '$eq',
//         '<=' : '$lte',
//         '<':"$lt",
//     };
//     const re = /\b(<|>|<=|=|>=|)\b/g;

//     //filtersproce>=30.rating>3
//     let newFilters = numericFilters.replace(re, (match) => `-${opertorMap[match]}-`)
//     //filters.price$gte-30,rating$gt-3
//     newFilters = newFilters.spilt(",").foreach((item) => {
//       const [field,operator,value] = item.spilt('-');
//       //field = price
//       //operator = $gte
//       //value = 30 
//       if(options.includes(field)){
//         queryObject[field] = {[operator]:Number(value)}
//       }
//     })

//     // {price:{$gte:30}}
    
//   }
//   let results = await Product.find(queryObject);


//   if(sort){
//     const sortList = sort.spilt(",").join(" ");
//     results = results.sort(sortList)
//   }else{
//     results = results.sort('createdAt')
//   }
//   if(fields){
//     const fieldsList = fields.split(",")
//     results = results.select(fieldsList)
//   }
//   const page = Number(req.query.pag) || 1;
//   const limit = Number(req.query.limit) || 5;
//   const skip = (page - 1) *limit 

//   results = results.skip(skip).limit(limit);

//   const products = await results
//   let results = await Product.find(queryObject);
//   res.json({ status: 200, msg: "success", results:products, nbHits:products.length });
// };

// //-------------------------------------------------------------
// //---------------------------------------------------------------
// //-----------------------------------------------------------------
// //----------------------------------------------------------------------
// //-----------------------------------------------------------------
// //----------------------------------------------------------------
// //--------------------------------------------------------------

// const getAllStatic = async (req, res) => {
//   // throw new Error (`TESTING ASYNC ERRORS`)
//   const products = await Product.find({}).select("name price");
//   res.json({ status: 200, msg: "static", results: products });
// };

// //-----------------------------------------------------------------
// //-------------------------------------------------------------------
// //----------------------------------------------------------------------
// //------------------------------------------------------------------------

// const createJob = (req,res) => {
//   req.body.createBy = req.user.userID

//   const job = await Job.create(req.body)

//   res.status(StatusCodes.CREATED).json({job})
// }

// const getAllJobs = (req,res) => {
//   const jobs = await Job.find({ createdBy:req.user.userID}).sort(`CraetedAt`)
//   res.status(StatusCodes.OK).json({jobs,count:jobs.length})
// }

// const getJob = (req,res) => {
//   const {userID} = req.user;
//   const {id:JobID} = req.params

//   const job = await Job.findOne({
//     _id:JobID,
//     createdBy:userID
//   })

//   if(!job){
//     throw new NotFoundError(`no job with id ${jobID}`)
//   }

//   res.status(StatusCodes.OK).json({jobs})
// }
// const updateJob = async (req,res) => {
//   const { company, position } = req.body
//   const { userID } = req.user
//   const { id:JobID } = req.user

//   if(!company || !position){
//     throw new BadRequestError("company and postion fields misy be filled")
//   }

//   const job = await Job.findByIdandUpdate(
//     {_id:JobID, createdBy:userID},
//     req.body,
//     {new:true, runValidators:true},


//   )
//     if(!job){
//       throw new NotFoundError(`no job with id ${JobID}`)
//     }

//     res.status(StatusCodes.OK).json({ job })

// }

// const deleteJob = (req,res) => {
//   const {
//     user:{ userID },
//     params: { id:JobID },

//   } = req

//   const job = await Job.finallyIdAndRemove({
//     _id:jobID,
//     createdBy: userID,
//   })
//   if(!job){
//     throw new NotFoundError(`no job found with the ${jobID}`)

//   }
//   res.status(StatusCodes.OK).json({ job })
// }

// module.exports = { getAllProducts, getAllStatic };

/*
getAllJobs function
Grabs every job from the DB
Returns a json with jobs and the job count
getJob
Grabs a single 
Uses the jobID or the createdBy ID to find one
Returns the job in a json
createJob
Creates a job using the Job model from the body
Returns a status CREATED and the job created as a json
updateJob 
Takes in a jobID and the params and will update an existing job on the DB
Returns status OK and the job updated as a json
deleteJob
Finds a job based on jobID and removes it from the DB
Returns status OK and sends the ID that was removed back
*/
const Job = require("../models/job-schema");
const { StatusCodes } = require("http-status-codes");
const { notFound } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userID }).sort("createdAt");
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = async (req, res) => {
  const { userID } = req.user;
  const { id: jobID } = req.params;

  const job = await Job.findOne({
    _id: jobID,
    createdBy: userID,
  });
  if (!job) {
    throw new notFound("no job id");
  }
  res.status(StatusCodes.OK).json({ job });

  res.send("hi");
};

const createJob = async (req, res) => {
  // getting id
  req.body.createdBy = req.user.userID;
  // getting company and position
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    job,
  });
};

const updateJob = async (req, res) => {
  console.log("userID");

  const { company, position } = req.body;
  const { userID } = req.user;
  const { id: jobID } = req.params;
  if (!company || !position) {
    throw new notFound("company and position must be filled");
  }
  const job = await Job.findByIdAndUpdate(
    {
      _id: jobID,
      createdBy: userID,
    },
    req.body,
    //job will be saving the new document not the old one
    //!!also run validators
    { new: true, runValidators: true }
  );

  if (!job) throw new notFound(`no job with id ${jobID}`);
  res.status(StatusCodes.OK).json({ job: job });
};

const deleteJob = async (req, res) => {
  const { userID } = req.user;
  const { id: jobID } = req.params;
  const job = await Job.findByIdAndRemove({
    _id: jobID,
    createdby: userID,
  });
  if (!job) {
    throw new notFound("no job with id");
  }
  res.status(StatusCodes.OK).json({ job: job });
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};