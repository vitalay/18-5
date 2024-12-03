<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officia!</p>
      <button v-if="!wasRead" class="btn primary" @click="mark">Прочесть новость</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wasRead: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    'open-news': null,
    'read-news': (id) => typeof id === 'number',
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit('open-news');
      }
    },
    mark() {
      this.isNewsOpen = false;
      const id = this.id;
      if (!id) {
        console.warn('Нет параметра id для emit read-news');
        return;
      }
      this.$emit('read-news', id);
    },
  },
};
</script>
