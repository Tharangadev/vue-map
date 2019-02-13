<template>

    <el-card :body-style="{ padding: '0px' }" class="card_container">
      <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xKlMLTCyF0sWc48xBApRMgHaEc%26pid%3D15.1&f=1" class="image">
      <div style="padding: 14px;">
        <h5>
          method of buying
        </h5>
        <div class="options">
          <span>3 BDS.</span>
          <span>1 BA</span>
          <span>1000 sqft</span>
        </div>
        <div class="address">
          201 NE , Southern way ,Seatle
        </div>
      </div>
    </el-card>

</template>

<script>
  export default {
    name: 'card_layout'
  }
</script>

<style scoped>
.el-card
{
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  border-radius: 0px;
}
  .image
  {
    height: 150px;
    width:100%;
  }
  .options
  {
    font-size: 12px;
    font-weight: 600;
    margin-top: 5px;
  }
  .address
  {
    font-size:12px;
    margin-top: 5px;
  }
</style>
