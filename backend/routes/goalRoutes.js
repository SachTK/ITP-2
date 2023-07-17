const express = require('express')
const router = express.Router()
const {getGoals,setGoal,updateGoals,deleteGoal}= require('../controllers/goalController')
const {protect}= require('../middleware/authMiddleware')

// //read
// router.get('/',getGoals)

// //create-post
// router.post('/',setGoal)

// //update
// router.put('/:id',updateGoals)

// //delete
// router.delete('/:id',deleteGoal)



router.route('/').get(protect,getGoals).post(protect,setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoals)

module.exports=router