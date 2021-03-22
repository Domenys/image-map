<template lang="pug">
  div.dt-image-map-wrap
    h1 Карта изображения с плагином image-map
    img(
      src="../assets/img/fantasy_map.jpeg" 
      alt="Fantasy_map" 
      usemap="#fantasy-map"
      width="1920"
      height="880"
    ).dt-fantasy-map-img
    map(name="fantasy-map").dt-fantasy-map
      area(
        nohref
        v-for="(fantasy, key) in mapArea"
        target=""
        :alt="fantasy.alt" 
        title=""
        :coords="fantasy.coords" 
        :shape="fantasy.shape"
        @active="currentArea(fantasy)"
        @mouseover="tooltipVisibility(visibleValue = true, fantasy); currentArea(fantasy)" 
        @mouseleave="tooltipVisibility(visibleValue = false, fantasy); clearCurrentArea()"
      ).dt-fantasy-map-area
      div(v-show="tooltipVisible" ref="tooltipWrap").dt-tooltip
        span(ref="tooltipTitle").dt-tooltip-title
        span(ref="tooltipDescription").dt-tooltip-description
      div(v-show="tooltipWithoutVisible" ref="tooltipWithoutWrap").dt-tooltip-without-text
        span(ref="tooltipWithoutText")  Нет информации о данной стране
      
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ImageMap',
  data: () => ({
    tooltipVisible: false,
    tooltipWithoutVisible: false
  }),
  computed: {
    ...mapState({
      mapArea: state => state.mapData.mapArea
    })
  },
  methods: {
    tooltipVisibility(visible, fantasy) {
      const tooltipTitle = this.$refs.tooltipTitle
      const tooltipDescription = this.$refs.tooltipDescription

      if (fantasy.title === '') tooltipTitle.style.display = 'none'
      else tooltipTitle.style.display = 'block'

      if (fantasy.description === '') tooltipDescription.style.display = 'none'
      else tooltipDescription.style.display = 'block'

      if (fantasy.title === '' && fantasy.description === '') this.tooltipWithoutVisible = true
      else this.tooltipWithoutVisible = false

      if (visible === true) this.tooltipVisible = true
      else this.tooltipVisible = false
    },
    currentArea(fantasy) {
      const tooltipWrap = this.$refs.tooltipWrap
      const tooltipWithoutWrap = this.$refs.tooltipWithoutWrap
      const tooltipTitle = this.$refs.tooltipTitle
      const tooltipDescription = this.$refs.tooltipDescription
      // if (fantasy.title === '' && fantasy.description === '') this.tooltipWithoutVisible = true
      // else this.tooltipWithoutVisible = false
      
      if (fantasy.title && fantasy.title.length > 0)  tooltipTitle.innerText = fantasy.title
      if (fantasy.description && fantasy.description.length > 0)  tooltipDescription.innerText = fantasy.description
      else ''
      document.addEventListener('mousemove', function(e){
        tooltipWrap.style.left = (e.pageX-40)+"px"
        tooltipWrap.style.top = (e.pageY-50)+"px"
        tooltipWithoutWrap.style.left = (e.pageX-40)+"px"
        tooltipWithoutWrap.style.top = (e.pageY-50)+"px"
      })
    },
    clearCurrentArea() {
      const tooltipTitle = this.$refs.tooltipTitle
      const tooltipDescription = this.$refs.tooltipDescription
      tooltipTitle.innerText = ''
      tooltipDescription.innerText = ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.dt-image-map-wrap
  position  relative
.dt-tooltip
.dt-tooltip-without-text
  box-sizing  border-box
  background #286F8A
  line-height 24px
  cursor text
  transform translate3d(0,-20px,0)
  transition all .5s ease-out
  position  absolute
  top 0
  left 0
  width: 300px
  &:before
    position absolute
    content ''
    width 300px
    height 14px
    bottom 14px
    left 0
  &:after
    position absolute
    content ''
    width 10px
    height 10px
    transform rotate(45deg)
    top -5px
    left 50%
    margin-left -5px
    background #286F8A
  .dt-tooltip-title
  .dt-tooltip-description
    display block
    text-align  left
  .dt-tooltip-title
    font-size 16px
    font-font-weight 700
    text-align center
    font-weight 700
    font-size 16px
    color #fff
  .dt-tooltip-description
    padding 10px 15px
    background  #fff
    text-align  justify
.dt-tooltip-without-text
  background #fff
  padding 10px 15px
</style>