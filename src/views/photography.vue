<template>
<div>
  <div id='photos'>
    <img  class='item lazyfade'
      v-for="image in images"
      :key="image.src"
      v-lazy="image.src"
    />
  </div>
  <!-- <isotope :options='{}' :list="" > -->
  <div v-for="element in list" :key="elent">
    {{element.name}}
  </div>
<!-- </isotope> -->
</div>
</template>

<style scoped>
img[lazy=loading] {
/* width: 30px!important;
margin:80px; */
/* height: 500px; */
 }
.lazyfade[lazy=loaded]{
  opacity: 1!important;
}
#photos {
  /* Prevent vertical gaps */
  line-height: 0;
  column-count:         3;
  column-gap:           0px;
  padding-bottom: 100px;
  padding-left: 5px;
  padding-right: 5px;
}
@media (max-width: 800px) {
  #photos {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  #photos {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:         1;
  }
}

#photos img {
  width: calc(100% - 10px);
  /* height: auto !important; */
  padding: 5px;
  opacity: 0;
  transition: opacity 2s;
}
</style>

<script>
import conf from '../config'
import {images} from '../utils/gallery'
// import isotope from 'vueisotope'

export default {

  // components: {
  //   isotope
  // },

  name: 'photography',

  data () {
    return {
      title: 'photography - ' + conf.blogTitle,
      images: images,
      list: {
        name: 'bob'
      }
    }
  }
}
</script>
