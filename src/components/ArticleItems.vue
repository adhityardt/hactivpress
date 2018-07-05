<template>
  <div>
    <div v-for="article of articlesDb" :key="article['.key']" class="card" style="margin-bottom:5px;">
      <div class="card-body">
        <img src="@/assets/glyphicons-4-user.png">
        {{usersDb.filter(function(el){return el['.key'] == article.userId})[0].name}} posted :
        <br>
      </div>
        <p>{{article.content}}</p>
        <div id="editButton" v-if="article.userId == userId">
          <button class="btn btn-danger" @click="deleteAnswer(answer.key)"  >
            <img src="@/assets/glyphicons-257-delete.png" >  
            Delete Article
          </button>
          <button data-toggle="modal" data-target="#updateAnswerModal" class="btn btn-warning" @click="editAnswer(answer.key)"  >
            <img src="@/assets/glyphicons-151-edit.png" >  
            Edit Article
          </button>
        </div>
      <div class="card-footer">
       
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase.js'
import { mapState } from 'vuex'
export default {
  name : 'articleitem',
  firebase: {
    usersDb: db.ref('/Users/'),
    articlesDb: db.ref('/Articles/'),
    authorsDb: db.ref('/Authors/'),
    categoryDb: db.ref('/Category/')
  },
  computed: {
    ...mapState([
      'userId'
    ])
  }
}
</script>

<style>

</style>
