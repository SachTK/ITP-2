const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

//get goals
//route  GET/api/goals
//access private
const getGoals = asyncHandler(async(req,res)=>{
    const goals= await Goal.find({user:req.user.id})
    res.status(200).json(goals)
})


//set goals
//route  POST/api/goals
//access private
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id
    })
    res.status(200).json(goal)
})


//update goals
//route  PUT/api/goals/:id
//access private
const updateGoals =asyncHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    
  

    //check user existance
    if(!req.user){
      res.status(401)
      throw new Error('user not found')
    }

    //make sure only authorized person can updating
    if(goal.user.toString()!== req.user.id){
        res.status(401)
        throw new  Error('user not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
         new:true}) 
    res.status(200).json(updatedGoal)
})


//delete goals
//route  DELETE/api/goals/:id
//access private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findByIdAndDelete(req.params.id);
  
    if (!goal) {
      res.status(400);
      throw new Error('Goal not found');
    }

   

    //check user existance
    if(!req.user){
      res.status(401)
      throw new Error('user not found')
    }

    //make sure only authorized person can updating
    if(goal.user.toString()!== req.user.id){
        res.status(401)
        throw new  Error('user not authorized')
    }

  
    res.status(200).json({ id: req.params.id });
  });
  

module.exports={
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal
}