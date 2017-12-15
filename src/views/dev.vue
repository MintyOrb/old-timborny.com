<template>
<div class='limited'>
  <div class='item'>
    <a target='_blank' href='http://www.knowlo.io'>
    <img class='thumb' src="/know.PNG" />
    <div class='description'>
      <span class='title'>knowlo</span>
      <span><a target="_blank" href="https://github.com/bornytm/knowlo"><img class='gh' src="/github.png"></a></span>
      <div>
        <span>Knowlo is a site for aggrgating and organizing educational resources by identifying the concepts they teach and how those concepts relate to one another.</span>
      </div>
      <div>
        <span>Stack: </span> Vue.js, Neo4j (GrapheneDB), Heroku.
      </div>
    </div>
    </a>
  </div>
  <div class='item'>
    <a target='_blank' href='http://impact.su.org'>
    <img class='thumb' src="/impact.PNG" />
    <div class='description'><span class='title'>Singularity Universtiy Impact Dashboard</span>
      <div>
        <span>This project is a graphic representation of SU's impact metrics, spanning from number of events across the globe to impact initivations started by community members.</span>
      </div>
      <div>
        <span>Tools: </span> graph-scroll, D3.js (v3.5).
      </div>
    </div>
    </a>
  </div>
  <div class='item'>
    <a target='_blank' href='http://gspdirectory.surge.sh'>
    <img class='thumb' src="/gsp.PNG" />
    <div class='description'>
      <span class='title'>Global Solutions Program Directory</span>
      <!-- <span><a target="_blank" href="https://github.com/bornytm/knowlo"><img class='gh' src="/github.png"></a></span> -->
      <div>
        Participants in SU's GSP 16 used this directory to get to know one another before the program. During the program it was used to seek people with skills needed to complete their team projects.
      </div>
    </div>
    </a>
  </div>
  <div class='item'>
    <a target='_blank' href='http://runmap.surge.sh'>
    <img class='thumb' src="/run2.jpg" />
    <div class='description'>
      <span class='title'>Run Map</span>
      <span><a target="_blank" href="https://github.com/bornytm/testProjects/tree/master/runmap"><img class='gh' src="/github.png"></a></span>
      <div>
        A simple site for mapping my cumulative running/skiing efforts (as tracked by various exercise apps) on a single map.
      </div>
      <div>
        Tools: leaflet.js, mapbox.
      </div>
    </div>
    </a>
  </div>
</div>
</template>

<style scoped>
.thumb {
  width: 250px;
  padding: 20px;
}
.item > a {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: flex-start;
}
.description {
  display: inline-block;
  max-width: 370px;
  width: 100%;
  padding: 20px;
}
.title {
  font-size: 18px;
}
.gh {
  float:right;
  width: 20px;
}
a {
  color: black;
}
</style>

<script>
import conf from '../config'

export default {
  name: 'dev',

  data () {
    return {
      title: 'web dev - ' + conf.blogTitle
    }
  }
}
</script>
