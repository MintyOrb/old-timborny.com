<template>
  <div class='limited'>
    <article v-if="content" v-html="html"></article>
  </div>
</template>
<style>
article {
  line-height: 20px;
  padding-bottom: 4rem;
}
.print{
  font-size: 18px;
  color:black;
}
@media print
{
    .no-print, .no-print *
    {
        display: none !important;
    }
}
@page { size: auto;  margin: 0mm; }
.right {
  float:right;
}
</style>
<script>
  import marked from '../utils/render.js'
  import fm from 'front-matter'
  import axios from 'axios'

  export default {
    name: 'resume',
    methods: {
      getResume () {
        axios.get('/re.md')
          .then(res => res.data)
          .then(resume => {
            this.process(resume)
          })
      },
      process (resume) {
        const content = fm(resume)
        this.content = content.body
        this.html = marked(this.content)
      }
    },
    data () {
      return {
        title: '',
        date: null,
        content: '',
        html: '',
        all: ''
      }
    },
    created () {
      this.getResume()
    }
  }
</script>
