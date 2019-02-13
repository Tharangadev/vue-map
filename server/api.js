const {Router} =require('express')
const router=Router()
const data_set= require('./mock_data.js')
router.get('/api/search',function(req,res,next){
    console.log(req.params)
})
module.exports =router
