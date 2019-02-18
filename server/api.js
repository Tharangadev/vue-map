const {Router} =require('express')
const router=Router() 

const data_set= require('./mock_data.js')
router.get('/api/search',function(req,res,next){
    res.json(data_set.slice(0,30) )
})
///search route
router.get('/api/filter',(req,res,next)=>{
	let search=req.query
	let filtered_array=data_set.filter(item=>{
		if(search.no_of_beds<=item.beds)
		{
			if(search.home_type==item.Home_type)
			{
				if(search.price_range[0]<item.Price<search.price_range[1])
				{
					 return item
				}
			}
		}
		else 
		{
			return {
				message:"item not found"
			}
		}
	})
	res.json(filtered_array)
})
module.exports =router
