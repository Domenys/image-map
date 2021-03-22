<template lang="pug">
  div#app
    div#nav
      router-link(to="/" class="dt-router-link") Домой | 
      router-link(to="imageMap" class="dt-router-link") Карта изображения map-area | 
      router-link(to="imageSvgMap" class="dt-router-link") Карта изображения Svg
    router-view
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
.router-link-exact-active
  text-transform uppercase
.dt-router-link
  text-decoration none
  font-family: Georgia, serif;
  font-size 16
  font-weight 700
  color #000
</style>
