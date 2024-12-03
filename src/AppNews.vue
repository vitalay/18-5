<template>
  <div class="card">
    <h3>{{ title }}</h3>

    <app-button text="Отметить непрочитаной"
    color="danger"
     v-if="wasRead"
     @action="$emit('unmark', id)">
    </app-button>

    <app-button @action="open"
    :text="isNewsOpen ? 'Закрыть' : 'Открыть'">
    </app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officia!</p>

      <app-button v-if="!wasRead"
      text="Отметить прочитаной"
      color="primary"
      @click="mark">
    </app-button>

    <appNewsList></appNewsList>
    </div>
  </div>
</template>

<script>

import AppButton from './AppButton.vue';
import AppNewsList from './AppNewsList.vue';
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
    'unmark': (id) => typeof id === 'number',
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
    // unmark() {
    //   this.$emit('unmark', this.id);
    // },
  },
  components: {
    AppButton,
    AppNewsList
  },

};
</script>
