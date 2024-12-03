<template>

<div class="container pt-5">
  <div class="card">
    <h2>Актуальные новости {{ now }}</h2>
    <span>Открыто: {{ openRate }} </span>

  </div>

<AppNews
 v-for="item in news"
 :title="item.title"
 :key="item.id"
 :id="item.id"
 :is-open="item.isOpen"
 @open-news="openNews"
 />



</div>
</template>




<script >

import AppNews from './AppNews.vue'

export default {
 data() {
   return {
     now: new Date().toLocaleDateString(),
     openRate: 0,
     news: [

     {
       id: 1,
       title: 'Blog posta ',
       isOpen: false
     },

     {
       id: 2,
       title: 'Blog postb ',
       isOpen: false
     },



     ]
   }
 },
 methods: {
   openNews() {
     this.openRate++
   }
 },
 components: {
   AppNews
 }
}


</script>



<style scoped>

</style>
