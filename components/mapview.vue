<template>
  <div class="map_location" id="mapid"></div>
</template>
<script>
import { mapsettings } from '../settings/settings.js'
export default {
  name: 'mapview',
  data() {
    return {

    }
  },
  methods:{
  	adding_places(){
		var cities = L.layerGroup();
		L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
		L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
		L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
		L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);
  	}
  	
  },
  watch:{

  },
  mounted() {
    // initial map loading
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidGhhcmFuZ2FkZXYiLCJhIjoiY2pzYTZuODZuMG1mNzQ5cWRoZmIyeTY4NyJ9.TOGv-8DGsTMAblXO3Ajbzg', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(mymap);


    //marker
    var marker = L.marker([51.5, -0.09]).addTo(mymap)
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.")
  }
}

</script>
<style lang="css" scoped>
.map_location {
  width: 50%;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
}

</style>
