<template>
  <div class="hello">
    <button @click='request'>获取</button>
    <ul>
      <li v-for="(v,i) in items" :key="i">
        <a :href="v.href" target="_blank" class="img">
          <img :src="v.src" alt="">
        </a>
        <h2>{{v.title}}</h2>
        <span>浏览量：{{v.views}}</span>
        <span>点赞数：{{v.thumbs}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[]
    }
  },
  methods:{
    request(){
      fetch('/api/rank').then(res => res.json()).then(date => {
        this.items = date;
      });
    }
  },
  computed:{
      getItems(){
        return this.items;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul{
  width: 100%;
  overflow: hidden;
}
li{
  float: left;
  width: 22%;
}
.img{
  display: block;
  overflow: hidden;
  width: 100%;
  height: 200px;
}
</style>
