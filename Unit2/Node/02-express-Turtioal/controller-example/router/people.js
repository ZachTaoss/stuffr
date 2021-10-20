const express = require("express");
const router = express.Router();

const {createPeople,readPerson,deletePerson,updatePerson} = require("../controller/people")

// router.get("/",readPerson)
// router.post('/',createPeople)
// router.put('/:id',updatePerson)
// router.delete('/:id',deletePerson)

//==> /api/people
router.route('/').get(readPerson).post(createPeople)
router.route('/:id').put(updatePerson).delete(deletePerson)
module.exports = router;
