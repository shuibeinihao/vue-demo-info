<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a @click = "goback">返回上一页</a>
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from 'components/Hello';
export default {
  components:{Hello},
  data () {
    return {
      msg: 'Welcome to sport'
    }
  },
  methods:{
    goback(){
      this.$router.go(-1);
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
