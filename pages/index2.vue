<template>
  <el-container>
    <el-header>
      <p class="search_title">
        Search for <strong>'Restorents'</strong> in the Seatle
      </p>
      <el-row>
        <p>
          Filter By
        </p>
        <el-row :gutter="20">
          <el-col :lg="6" :xl="1">
            <span class="demonstration">
               Price range
             </span>
            <el-row>
              <el-button-group>
                <el-button type="primary" plain size="small">$0 - $10</el-button>
                <el-button type="primary" plain size="small">$10 - $100</el-button>
                <el-button type="primary" plain size="small">$100 ++</el-button>
              </el-button-group>
            </el-row>
          </el-col>
          <el-col :lg="6" :xl="1">
            <span class="demonstration">
               Distance From you
             </span>
            <el-slider v-model="Distance" :step="20"   show-stops></el-slider>
          </el-col>
          <el-col :lg="3" :xl="1">
            <el-dropdown>
              <el-button type="primary">
                Sort By<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Recommended</el-dropdown-item>
                <el-dropdown-item>Highest Rated</el-dropdown-item>
                <el-dropdown-item>Most Reviewed</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :lg="4" :xl="1">
            <el-select
              v-model="selected_feathures"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="Features">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
           </el-col>
          <el-col :lg="3" :xl="1">

          </el-col>
        </el-row>
      </el-row>
    </el-header>
    <el-row>
    </el-row>
  </el-container>
</template>
<script>
  export default {

    data() {
      return {
        input: '',
        Distance: 0,
        options:[
          {
            value:"Offering a Deal",
            label:"Offering a Deal"
          },
          {
            value:"Make a Reservation",
            label:"Make a Reservation"
          },
          {
            value:"open now %TIME%",
            label:"open now %TIME%"
          },
          {
            value:"Good for Groups",
            label:"Good for Groups"
          }
        ],
        selected_feathures: []
      }
    }

  }

</script>
<style>
  .search_pane {
    border-right: 1px solid red;
    height: 100vh;
    padding: 10px;
  }

</style>
