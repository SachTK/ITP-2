const express = require('express')
const router = express.Router()
const {getGoals,setGoal,updateGoals,deleteGoal}= require('../controllers/goalController')

// //read
// router.get('/',getGoals)

// //create-post
// router.post('/',setGoal)

// //update
// router.put('/:id',updateGoals)

// //delete
// router.delete('/:id',deleteGoal)



router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoals)

module.exports=router