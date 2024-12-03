<template>
  <div class="card">
    <ul>
      <!-- Use range syntax for v-for -->
      <li v-for="(item, i) in 5" :key="item">
        <!-- Pass the item to the slot -->
        <slot :iter="item" :idx="i"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Your component logic goes here
};
</script>

<style scoped>
/* Add your component styles here */
</style>
