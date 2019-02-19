<template>
  <div class="map_location" id="mapid"></div>
</template>
<script>
import { mapsettings } from '../settings/settings.js'
export default {
  name: 'mapview',
  props: ['places'],
  data() {
    return {

    }
  },
  methods: {
    adding_places() {
      this.places.forEach((single_place) => {
        L.marker([single_place.lat, single_place.Lon]).bindPopup(`<el-card>
<h4>
		<span>${single_place.beds}</span><span>${single_place.baths}</span> 
	</h4>
	<div>
		${single_place.Address} 
	</div>
</el-card>
	
 `).addTo(map)
      })
    }

  },
  computed: {
    timeto_newmarkers() {
      return this.$store.getters.loading
    }
  },
  watch: {
    timeto_newmarkers(old, newamount) {
      if (newamount) {
        this.adding_places()
      }
    }
  },
  mounted() {
    // initial map loading 
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var streets = L.tileLayer(mbUrl, { id: 'mapbox.streets', attribution: mbAttr });

    window.map = L.map('mapid', {
      center: [33.1057, 106.211],
      zoom: 5,
      layers: streets
    });




    var baseLayers = {
      "Streets": streets
    };

  }

}

</script>
<style lang="css">
.map_location {
  width: 50%;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
}

.leaflet-popup-content-wrapper h4 
{
	display: fex;

}

.custom .leaflet-popup-tip,
.custom .leaflet-popup-content-wrapper 
{
	border-radius: 0px;
}
.leaflet-popup-tip {
  padding: 0px;
  border-radius: 0px;
  padding: 3px;
}

.pop_up {}

</style>
