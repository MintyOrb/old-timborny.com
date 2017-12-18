<template>
  <div id='app'>
    <header class="limited">
      <div class="header">


      <router-link to="/">
        <img class="icon" src="/tb.PNG" />
      </router-link>
      <div class='title'>
        <router-link to="/">{{ title }}</router-link>
      </div>
      <div style="clear: both"></div>

      <div class='links no-print'>
        <a class='separator' target='_blank' href='http://github.com/bornytm'>github</a>
        <router-link class='separator' to="/resume">resume</router-link>
        <a href='mailto:bornytm@gmail.com'>email</a>
      </div>

      <div class='yes-print links'>
        <span class='separator'>bornytm@gmail.com </span>
        <span style='padding-left:6px'>+1.978.543.2115</span>
      </div>

      <div style="clear: both"></div>
      <search-bar v-if="isPageList"></search-bar>
      </div>
    </header>

    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>

  </div>
</template>

<style lang="stylus" src="./style/index.styl"></style>
<style>
/* * {outline:1px black solid;} */
.limited {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}
.yes-print{
  visibility: hidden;
  height: 0px;
}
@media print
{
    .yes-print
    {
        visibility: visible !important;
    }
}
#app {
  min-height: 101vh;
}
.title a{
  margin-left:-50px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.icon {
  float: left;
  width: 30px;
  margin-left: 20px;
}
.header {
  background-color: white;
  z-index: 1;
}
.links{
  margin-top: 20px;
  text-align:center;
}
.links a {
  color: gray;
  transition: color .3s;
  padding-right:3px;
}
.links a:hover{
  color:black;
}
.separator{
  border-right: 1px solid black;
  padding-right:3px;
}
</style>
<script>
  import conf from './config'
  import searchBar from './components/searchBar.vue'

  export default {
    name: 'app',

    data () {
      return {
        title: conf.blogTitle,
        test: ''
      }
    },

    computed: {
      isPageList () {
        return this.$route.name === 'list'
      }
    },

    components: {
      searchBar
    }
  }
</script>
