<template>

<div class="container pt-5">
  <div class="card">
    <h2>Актуальные новости {{ now }}</h2>
    <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано <strong>{{ readRate }} </strong> </span>

  </div>

<AppNews
 v-for="item in news"
 :title="item.title"
 :key="item.id"
 :id="item.id"
 :is-open="item.isOpen"
 :was-read="item.wasRead"

 @open-news="openNews"
 @read-news="readNews"
 @unmark="unreadNews"

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
     readRate: 0,
     news: [

     {
       id: 1,
       title: 'Blog posta ',
       isOpen: false,
       wasRead: false
     },

     {
       id: 2,
       title: 'Blog postb ',
       isOpen: false,
       wasRead: false
     },



     ]
   }
 },
 provide() {
   return {
     title: 'Новости',
     news: this.news
   }
 },
 methods: {
   openNews() {
     this.openRate++
   },
   readNews(id) {
     this.news.find(item => item.id === id).wasRead = true
     this.readRate++
   },
   unreadNews(id) {
     this.news.find(item => item.id === id).wasRead = false
     this.readRate--
   }
 },
 components: {
   AppNews
 }
}


</script>



<style scoped>
 h2 {
color:
#42b883;

}

</style>
