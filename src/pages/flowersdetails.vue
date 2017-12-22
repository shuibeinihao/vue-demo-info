<template>
  <div class="hello">
    <h1 @click = "change">{{ msg }}</h1>
    <router-link to="/flowerslist">跳转flowerslist{{editor.http_code||"暂无数据"}}</router-link>
    <a @click = "goback">返回上一页</a>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from 'components/Hello';
import { mapActions , mapState } from 'vuex'
import {getWang} from '../vuex/actions';
export default {
  components:{Hello},
  data () {
    return {
      msg: 'Welcome to flowersdetails'
    }
  },
  created(){
    this.getWang();
  },
  computed:{
    ...mapState(['editor']),
  },
  methods:{
    ...mapActions(['getWang']),
    goback(){
      this.$router.go(-1);
    },
    change(){
    },
  },
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
</style>
