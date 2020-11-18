<template>
  <div>
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">Remove</button>
    </li>
  </div>
</template>

<script>
export default {
    props:['title']
};
</script>

<style>
</style>