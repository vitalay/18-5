<template>

   <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
     {{isNeweOpen ? 'Закрыть' : 'Открыть'}}
    </button>
    <div v-if="isNeweOpen">
      <hr />
    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, officia!</p>
     <button class="btn primary">Прочесть новость</button>
  </div>

  </div>

</template>


<script>
export default {

  //props: ['title'],
  //emits: ['open-news'],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true

    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false
    }


    },
  emits: {
    'open-news': null
  },
  data() {
    return {
        isNeweOpen: this.isOpen
      //isOpen: false
    }
  },
  methods: {
    open() {
      this.isNeweOpen = !this.isNeweOpen
      if (this.isNeweOpen) {
        this.$emit('open-news')
      }

    }
  },

}


</script>
