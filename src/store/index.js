import Vue from 'vue'
import Vuex from 'vuex'

import mapData from './mapData'
import svgMapData from './svgMapData'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    mapData,
    svgMapData
  }
})
