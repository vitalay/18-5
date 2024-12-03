<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-block>
      <p>Это самый важный текст</p>

      <!-- Новый синтаксис для слота -->
      <template #header>
        <h3>Это заголовок</h3>
      </template>

      <template #footer>
        <hr />
        <smoll>Это footer</smoll>
      </template>

    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock.vue';

export default {
  components: {
    AppBlock,
  },
};
</script>

<style scoped>
/* Ваш CSS */
</style>
