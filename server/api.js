const {Router} =require('express')
const router=Router()
const data_set= require('./mock_data.js')
router.get('/api/search',function(req,res,next){
    res.json(data_set.slice(0,30) )
})
module.exports =router
