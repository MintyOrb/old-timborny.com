<template>
<div>
  <div id='photos'>
    <img class='item' v-for="image in images" :src="image.src"/>
  </div>
</div>
</template>

<style scoped>
#photos {
  /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap:   0px;
  -moz-column-count:    3;
  -moz-column-gap:      0px;
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
  height: auto !important;
  padding: 5px;
}
</style>

<script>
import conf from '../config'
import {images} from '../utils/gallery'

export default {

  name: 'photography',

  data () {
    return {
      title: 'photography - ' + conf.blogTitle,
      images: images
    }
  }
}
</script>
