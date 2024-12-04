<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>




<app-list>
 <template #default="{idx, iter}">
  <span style="color:red">
    <strong> {{ idx + 1 }} </strong>
    Item: {{ iter }}</span>
 </template>
</app-list>


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
import AppList from './AppList.vue'
export default {
  components: {
    AppBlock,
    AppList
  },
};
</script>

<style scoped>
/* Ваш CSS */
</style>
