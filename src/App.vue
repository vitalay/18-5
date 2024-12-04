<template>
  <div class="container pt-1">
    <div class="card">

      <async-component />
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button
      ref="myBtn"
        :color="oneColor"
        @action="active = 'one'"
      >
        One
      </app-button>

      <app-button
        :color="twoColor"
        @action="active = 'two'"
      >
        Two
      </app-button>

      <!-- Только один способ рендеринга -->
      <keep-alive>
        <component :is="componentName" />
      </keep-alive>
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
  computed: {
    componentName() {
      return this.active === "one" ? "AppTextOne" : "AppTextTwo";
    },
    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo,
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
