<template>
  <div>
    <div class="container_padding">
      <el-row class="search_bar row-bg" type="flex" align="center">
        <el-col :span="5">
          <h1>Home Search</h1>
        </el-col>
        <!--//search-->
        <el-col :span="4">
          <el-input placeholder="Search the place" v-model="search_term" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!--Listing types-->
        <el-col :span="3">
          <div class="drop_down">
            <el-dropdown>
              <span class="el-dropdown-link">
                Listing Type
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>

              <el-dropdown-menu slot="dropdown" size="small" class="list_types">
                <span>
                  <el-tree
                    :data="listing_types"
                    show-checkbox
                    default-expand-all
                    node-key="id"
                    ref="tree"
                    highlight-current
                  ></el-tree>
                </span>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!--Price range-->
        <el-col :span="3">
          <div class="drop_down">
            <el-dropdown>
              <span class="el-dropdown-link">
                Price Range
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="price_range" size="small">
                <span>
                  <el-form>
                    <el-form-item>
                      <el-row :gutter="20" type="flex" justify="center">
                        <el-col :span="12">
                          <label for>From:</label>
                          <el-input placeholder="From" v-model="price_range[0]"></el-input>
                        </el-col>
                        <el-col :span="12">
                          <label for>To:</label>
                          <el-input placeholder="to" v-model="price_range[1]"></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-slider
                      v-model="price_range"
                      range
                      :step="50000"
                      :min="100000"
                      :max="500000"
                    ></el-slider>
                  </el-form>
                </span>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!--No of beds-->
        <el-col :span="3">
          <div class="drop_down">
            <el-dropdown @command="no_beds">
              <span class="el-dropdown-link">
                Number of beds
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="noofbeds">
                <el-dropdown-item command="0">0+</el-dropdown-item>
                <el-dropdown-item command="1">1+</el-dropdown-item>
                <el-dropdown-item command="2">2+</el-dropdown-item>
                <el-dropdown-item command="3">3+</el-dropdown-item>
                <el-dropdown-item command="4">4+</el-dropdown-item>
                <el-dropdown-item command="5">6+</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!--Home types-->
        <el-col :span="3">
          <div class="drop_down">
            <el-dropdown @command="home_types">
              <span class="el-dropdown-link">
                Home type
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="hometype">
                <el-dropdown-item command="houses">Houses</el-dropdown-item>
                <el-dropdown-item command="Apartments">Apartments</el-dropdown-item>
                <el-dropdown-item command="Condos">Condos/co-ops</el-dropdown-item>
                <el-dropdown-item command="Townhomes">Townhomes</el-dropdown-item>
                <el-dropdown-item command="Manufactured">Manufactured</el-dropdown-item>
                <el-dropdown-item command="Lots">Lots / Lands</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <!-- apply filter -->
        <el-col :span="2">
          <el-button @click="apple" type="primary">Apply filter</el-button>
        </el-col>
      </el-row>
    </div>

    <div class="map">
      <div class="map_location"></div>
      <div class="details">
        <el-row>
          <h3 class="el-submenu__title">Real Estate1,628,348 results</h3>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(place,o) in places" :key="o" style="padding:10px;">
            <card_layout :place_data="place"></card_layout>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
import Card_layout from '../components/card_layout'
export default {
  name: 'index',
  components: { Card_layout },
  middleware: 'search',
  computed: {
    places(){ return this.$store.getters.alllist}
  },
  data() {
    return {
      //searchbox
      search_term: '',
      ///price range
      price_range: [250000, 350000],
      no_of_beds: '',
      home_type: '',
      listing_types: [
        {
          id: 1,
          label: 'FOR SALE',
          children: [
            {
              id: 4,
              label: 'By Agent'
            },
            {
              id: 22,
              label: 'By owner'
            },
            {
              id: 33,
              label: 'New Construction'
            },
            {
              id: 44,
              label: 'Forclosures'
            },
            {
              id: 55,
              label: 'Comming Soon'
            }
          ]
        },
        {
          id: 2,
          label: 'Potential listing',
          children: [
            {
              id: 66,
              label: 'Foreclosure'
            },
            {
              id: 77,
              label: 'Pre-Foreclosure'
            },
            {
              id: 88,
              label: 'Make Me Move'
            }
          ]
        },
        {
          id: 3,
          label: 'For Rent'
        },
        {
          id: 4,
          label: 'Recently Closed'
        }
      ]
    }
  },
  methods: {
    no_beds(command) {
      this.no_of_beds = command
    },
    home_types(command) {
      this.home_type = command
    },
    apple() {
      let tree = this.$refs.tree.getCheckedNodes()
      let listings_type = tree.map(item => item.label)
      let filter_data = {
        listings_type,
        no_of_beds: this.no_of_beds,
        home_type: this.home_type,
        price_range: this.price_range,
        search_term: this.search_term
      }
      console.log(filter_data)
    }
  },
  mounted() {
    //initial data grab
    this.$store.dispatch('get')
  }
}
</script>
<style lang="css" scoped>
.search_bar {
  padding: 10px;
}

.drop_down {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 5px;
  width: 100%;
}
.drop_menu_contain {
  padding: 20px;
  margin-top: 10px;
}
.el-dropdown-link,
.el-dropdown {
  width: 100%;
  text-align: center;
}
.noofbeds {
  width: 150px;
  text-align: center;
}
.list_types {
  width: 250px;
  text-align: center;
}
.price_range {
  width: 300px;
  padding: 10px 20px;
}
.map {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /*background: red;*/
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
}
.map_location {
  width: 50%;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: yellow;
  height: 100%;
}
.details {
  width: 50%;
  height: 100%;
  overflow-y: scroll;
}
</style>
