<template>
  <div class='sections limited'>
    <span>
      <router-link class='grow' to='/dev'>
      <icon name='terminal' scale='4'></icon>
      <div style='text-align:center'>Web Dev</div>
      </router-link>
    </span>
    <span v-if='false'>
      <router-link class='grow' to='/writing'>
      <icon name='file-text' scale='4'></icon>
      <div style='text-align:center'>Writing</div>
      </router-link>
    </span>
    <span>
      <router-link class='grow' to='/photography'>
      <icon name='camera' scale='4' ></icon>
      <div style='text-align:center'>Photography</div>
      </router-link>
    </span>
  </div>
</template>
<script>
  import conf from '../config'

  export default {
    name: 'home',

    data () {
      return {
        lists: [],
        loading: true
      }
    },

    mounted () {
      window.document.title = conf.blogTitle + ' - home'
      // this.loadList()
    },

    methods: {
      loadList () {
        this.loading = true
      }
    }
  }
</script>
<style lang='stylus' scoped>
.grow
  transition all .3s
.grow:hover
  transform scale(1.2)
.sections
  display flex
  flex-flow row wrap
  justify-content space-around
  font-weight 100
  font-size 33px
a
  color black
span a
  width 200px
  display flex
  flex-direction column
  align-items center
  padding 40px
</style>
