<template lang="pug">
  .dt-image-svg-map-wrap
    h1 Карта изображения с использованием SVG
    div.dt-tooltip-wrap(ref="tooltipWrap")
      h2.dt-tooltip-title(ref="tooltipTitle")
      span.dt-tooltip-description(ref="tooltipDescription")
    svg(
      id="fantasyMap" 
      width="1920" 
      height="880" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" 
      xmlns:dc="http://purl.org/dc/elements/1.1/" 
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
      xmlns:svg="http://www.w3.org/2000/svg" 
      background-color="#000000"
      style="pointer-events: fill;"
    )
      rect(id="ocean" x="0" y="0" width="1920" height="880" fill="#466eab")
      path(
        v-for="(area, key) in mapArea"
        :key="key"
        :id="area.id" 
        :d="area.d" 
        :fill="area.fill" 
        :stroke="area.stroke"
        @click="currentArea(area)"
        )
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ImageSvgMap',
  data: () => ({
    tooltipVisible: false
  }),
  computed: {
    ...mapState({
      mapArea: state => state.svgMapData.svgMapArea
    })
  },
  methods: {
    currentArea(area) {
      const tooltipWrap = this.$refs.tooltipWrap
      const tooltipTitle = this.$refs.tooltipTitle
      const tooltipDescription = this.$refs.tooltipDescription
      this.tooltipVisible = true
      tooltipWrap.style.top = '-1px'
      tooltipWrap.style.position = 'fixed'
      if (area.title !== '') tooltipTitle.innerText = area.title
      if (area.description !== '') tooltipDescription.innerText = area.description
      if (area.title === '' && area.description === '') {
        tooltipTitle.innerText = 'Нет информации о территории'
        tooltipDescription.innerText = 'Отправить разведчиков, милорд?!'
      }
    },
    tooltipInvisible() {
      const tooltipWrap = this.$refs.tooltipWrap
      tooltipWrap.style.top = '-140px'
      tooltipWrap.style.position = 'absolute'
    }
  }

}
</script>

<style lang="stylus" scoped>
.dt-tooltip-wrap
  position absolute
  top -160px
  left 0
  right 0
  background #000
  border-bottom-left-radius 50%
  border-bottom-right-radius 50%
  height 160px
  transition all 0.5s ease-out
  overflow hidden
  .dt-tooltip-title
  .dt-tooltip-description
    display block
    color white
  .dt-tooltip-title
    height 60px
    line-height 55px
    margin-bottom 10px
    background #286F8A
  .dt-tooltip-description
    margin-top 0
    background #000
    color: #fff
.statesBody
  background #466eab
</style>