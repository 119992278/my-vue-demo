<template>
  <div class="hello">
    <p>页面传参 : {{$route.params.username}}</p>
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'Hi, I am Hi1!'
    }
  }
}
</script>
