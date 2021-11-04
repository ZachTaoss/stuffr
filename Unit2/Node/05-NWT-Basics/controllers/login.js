// login function returns a json with success
const BadRequestError = require('../errors/bad-request')
require('../.env')

const login = (req, res) => {
    const {username,password} = req.body

    if(!username || !password){
        throw new BadRequestError("please provide a email and password")
    }

    const id = new Date().getDate();

    const token = jwt.sign({id,username}, process.env.JWT_SECERT,{expiresIn:"30d"})

  res.status(200).json({ status: 200, msg: "success", results: [] });
};

//dashborad function returns a json it success

const dashboard = (req, res) => {
  res.json({
    status: 200,
    msg: req.user.username,
    secret: req.headers.authorization,    
  });
};

module.exports = { login, dashboard };
