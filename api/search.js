const data_set= require('../server/mock_data.js')
export default  function(req,res,next){
	res.json(data_set.slice(0,30) )
}