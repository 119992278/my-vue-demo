<template>
  <div id="firstcomponent">
    <h1>I am a title.</h1>
    <a> written by {{ author }} </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: '新作者-chanjoey'
    }
  }
}
</script>
<style>
</style>
