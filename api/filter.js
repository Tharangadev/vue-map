const data_set= require('../server/mock_data.js')
export default function(req,res,next){
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
}