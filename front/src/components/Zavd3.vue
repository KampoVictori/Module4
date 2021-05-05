<template>
<div> 
  <input
        type="text"
        placeholder="Шукати по назві"
        v-model="searchTitleString"
      />
      <div class="wrap">
      <ul v-if="filtredBooks.length > 0">
        <book-template
          v-for="b in filtredBooks"
          :key="b.Id"
          class="bookvie"
          v-on:click="selectBook(b._id)"
          v-bind:photo="b"
        >
        </book-template>
      </ul>
      <p v-if="filtredBooks.length == 0">Фото з таким хештегом немає</p>
    </div>
    <router-link to="/photo/comments"> Додати коментарій </router-link>
      <ul>
    <photo-template v-for="(b, i) in photo" :key="i" class="photo" v-bind:bk="b"></photo-template>
  </ul>
</div>
</template>

<script>
import photoTemplate from "./photoTemplate.vue";
import { mapGetters } from "vuex";
import storage from "../storage"

export default{
    name:"Zavd3", 
    components:{
      photoTemplate,
      
    },
    data(){
      return {
        photo:storage.photo,
        searchTitleString: ""
      }
    },
     methods: {
       
    selectBook(id) {
      this.selected = id;
    },
       addComment() {
      this.photo.list_comment.push(this.newComment);
    },

  },
  computed: {
    ...mapGetters(["photo"]),
    areSomePhoto() {
      return this.photo.length > 0;
    },
    filtredBooks() {
      if (this.searchTitleString == "") return this.photo;
      return this.sortedBooks.filter((b) =>
        b.name.includes(this.searchTitleString)
      );
    },
  },
};
</script>