<template>
    <div>
        <input type="text"
        placeholder="Введіть комент"
        v-model="newComment">
<input type="button" @click="addComment" value="Додати"> 
    </div>
    
</template>

<script>


export default{
    name:"Zavd3", 
    components:{
      
    },
    data(){
      return {
        searchTitleString: ""
      }
    },
     methods: {
       
       addComment() {
      this.photo.list_comment.push(this.newComment);
    },

  }
};
</script>