<template>
  <div id="app" style="height: 100%;" v-loading="!loaded && show">
    <router-view @hook:mounted="loaded = true" v-if="show"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      show: true
    }
  }
}
</script>
