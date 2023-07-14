const asyncHandler = require('express-async-handler')

//get goals
//route  GET/api/goals
//access private
const getGoals = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Get goals'})
})


//set goals
//route  POST/api/goals
//access private
const setGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }

    res.status(200).json({message:'Set goal'})
})


//update goals
//route  PUT/api/goals/:id
//access private
const updateGoals =asyncHandler(async(req,res)=>{
   
    res.status(200).json({message:`Update goal ${req.params.id}`})
})


//delete goals
//route  DELETE/api/goals/:id
//access private
const deleteGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Deleted goal ${req.params.id}`})
})

module.exports={
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal
}