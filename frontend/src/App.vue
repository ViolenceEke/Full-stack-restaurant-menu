<template>
  <div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
.btn {
  margin: 0 auto;
  display: block;
}

.navbar {
  height: 64px;
  text-align: center
}

.header {
  background-color: #61a555;
}
</style>