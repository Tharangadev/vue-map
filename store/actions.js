export default {
  async get({commit}){
    await this.$axios.get('/api/search').then((res)=>{
       
      if(res.status==200)
      {
        commit('set',res.data)
      }
    })
  }
}
