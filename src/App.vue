<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
        :color="active === 'one' ? 'primary' : ''"
        @action="active = 'one'"
        >One</app-button
      >

      <app-button
        :color="active === 'two' ? 'primary' : ''"
        @action="active = 'two'"
        >Two</app-button
      >
<app-text-one v-if="active === 'one'"></app-text-one>

<app-text-two v-else-if="active === 'two'"></app-text-two>


    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppTextOne from "./AppTextOne.vue";
import AppTextTwo from "./AppTextTwo.vue";

export default {
  data() {
    return {
      active: "one", // Начальное состояние активной кнопки
    };
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo
  },
};
</script>

<style scoped>

.container {
  max-width: 600px;
  margin: 0 auto;



}
.card {
  background-color: #867d7d;
  border: 1px solid #aa9999;
  border-radius: 6px;
  padding: 1rem;
  text-align: center;
}


</style>
