const frameSchema = require("../models/frame")
const { StatuesCodes, StatusCodes } = require("http-status-codes")
const { notFound } = require("../errors")

const getAllFrames = async (req,res) => {
    const frames = await Frame.find({ createdBy: req.user.userID }).sort("name")
    res.status(StatusCodes.OK).json({ frames, count: frames.length })
}

const createFrame = async (req, res) => {
    req.body.createdBy = req.user.userID;

    const frame = await frame.create(req.body);

    res.status(StatusCodes.CREATED).json({
        frame
    })
}

const updateFrame = async (req, res) => {
    console.log("userID");

    const { company, position } = req.body;
    const { userID } = req.user;
    const { id: frameID } = req.params;

    const frame = await frame.findByIdAndUpdate(
        {
            _id: frameID,
            createdBy: userID,
        },
        req.body,
        {new:true, runValidators: true }

    )

    if(!frame) throw new notFound(`no frame with id ${frameID}`);
    res.status(StatusCodes.OK).json({ frame: frame });
};

const deleteFrames = async ( req, res ) => {
    const { userID } = req.user;
    const { id: frameID } = req.params;   
    const frame = await Frame.findByIdAndRemove({
        _id: frameID,
        createdBy: userID
    })
    if(!frame) {
        throw new notFound("no frame with id");
    }
    res.status(StatusCodes.OK).json({ frame:frame });
};

module.exports = {
    getAllFrames,
    // getFrame,
    createFrame,
    updateFrame,
    deleteFrames
}