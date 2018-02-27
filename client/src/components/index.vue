<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item,index) in items" :key="index" class="padding10">
        <el-card class="card">
          <div class="imgbox">
            <img :src="item.src" class="img">            
          </div>
          <div>
            <h3>{{item.title}}</h3>
            <p>浏览量：{{item.views}}</p>
            <p>点赞数：{{item.thumbs}}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
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
  },
  mounted(){
    var _this = this;
    this.axios.get('/api/rank')
    .then(function (res) {
      console.log(res)
      _this.items = res.data
    })
    .catch(function (error) { console.log(error) })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding10 {
  padding: 15px;
}
.card {
  height: 450px;
  text-align: center;
  /* transition: all .2s ease-in-out; */
}
/* .card:hover { */
  /* transform: rotateY(360deg); */
/* } */
.imgbox{
  width: 300px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
}
.img{
  width: 100%;
  height: 100;
  transition: all .6s;  
}
.img:hover {
  transform: scale(1.1);
}
</style>
