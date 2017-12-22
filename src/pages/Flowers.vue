<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/flowersdetails">跳转flowersdetails{{this.messageinfo.http_code||"暂无数据"}}
    </router-link>
    <router-view></router-view>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from 'components/Hello';
// import { mapActions , mapState } from 'vuex'
// import {getWang} from '../vuex/actions';
export default {
  components:{Hello},
  data () {
    return {
      msg: 'Welcome to flowers',
      messageinfo:{},
    }
  },
  mounted(){
    this.messageinfo = this.$store.getters.getApp;
      console.log("messageinfo",this.$store.getters.getApp);
  },
  created(){
    
  },
  computed:{
    //...mapState(['editor'])
  },
  methods: {
    //...mapActions(['getWang'])
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
