<template>
  <div>    
    <div v-for="(article, index) in articles" :key="index" class="card" style="margin-bottom:5px;">
      <div class="card-title">
        <h5>
          Category :
        </h5>
        <button class="btn btn-light"> #{{$route.params.categoryid}}</button>
      </div>
      <div class="card-body">
        <h6 style="text-align:left;">
          <img src="@/assets/glyphicons-4-user.png" >
          {{usersDb.filter(function(el){return el['.key'] == article.data.userId})[0].name}} posted :
        </h6>
        <h2>{{article.data.title}}</h2>
      </div>
        <p>{{article.data.content}}</p>
        <div id="editButton" v-if="$route.params.authorid == userId">
          <button class="btn btn-danger" @click="deleteArticle(answer.key)"  >
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
import router from '../router'
import { db } from '../firebase.js'
import { mapState } from 'vuex'
export default {
  name : 'articleitem',
  data () {
    return{
      articles: []
    }
  },
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
  methods:{
    getArticle () {
      db.ref('/Category/' + localStorage.getItem('categoryPicked')).on('value', (snapshot) => {
        let articleList = []
        snapshot.forEach(snap => {
          let result = {
            key: snap.key,
            data: snap.val()
          }
          articleList.push(result)
        })
        this.articles = articleList
      })
    }
  },
  created () {
    this.getArticle()
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
