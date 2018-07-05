<template>
  <div>
    <div v-for="article of articlesDb" :key="article['.key']" class="card" style="margin-bottom:5px;">
      <div class="card-title">
        <h5>
          Category :
        </h5>
        <router-link :to="{ path: `/author/${article.category}`}">
          <button class="btn btn-light" @click="setPickedCategoryLocal(article.category)"> #{{article.category}}</button>
        </router-link>
      </div>
      <div class="card-body">
        <router-link :to="{ path: `/author/${article.userId}`}" @click="setPickeUserIdLocal(article.userId)">
          <button class="btn" @click="setPickeUserIdLocal(article.userId)">
            <h6 style="text-align:left;">
              <img src="@/assets/glyphicons-4-user.png" >
              {{usersDb.filter(function(el){return el['.key'] == article.userId})[0].name}} posted :
            </h6>
          </button>
        </router-link>
        <h2>{{article['.key']}}</h2>
      </div>
        <p>{{article.content}}</p>
        <div id="editButton" v-if="article.userId == userId">
          <button class="btn btn-danger" @click="deleteArticle(article['.key'])"  >
            <img src="@/assets/glyphicons-257-delete.png" >  
            Delete Article
          </button>
          <button data-toggle="modal" data-target="#editArticleModal" class="btn btn-warning" @click="editAnswer(answer.key)"  >
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
  },
  methods: {
    setPickeUserIdLocal(userId){
      localStorage.setItem('userIdPicked', userId)
      // this.$router.push({path: `/authorpage/${userId}`})
    },
    setPickedCategoryLocal(category){
      localStorage.setItem('categoryPicked', category)
      // this.$router.push({path: `/authorpage/${userId}`})
    },
    deleteArticle(articleKey){
      db.ref('/Articles/').child(articleKey).remove()
    },
    editArticle(articleKey){
      db.ref('/Articles/')
    }
  }
}
</script>

<style>
.card-title{
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
</style>
