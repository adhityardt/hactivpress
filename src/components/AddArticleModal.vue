<template>
  <div>
    <div id="addArticleModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Add an article</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="title">
            </div>
            <div class="form-group">
              <label>Category:</label>
              <input type="text" class="form-control" v-model="category">
            </div>
            <div class="form-group">
              <label>Content: </label>
              <textarea class="form-control" rows="4" cols="50" v-model="content"></textarea>
              <!-- <wysiwyg v-model="contentHTML" /> -->
            </div>
            <button type="submit" class="btn btn-warning" @click="postArticle" data-dismiss="modal">POST</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'editItemModal',
  data () {
    return {
      title: '',
      category: '',
      content: ''
    }
  },
  methods: {
    postArticle () {
      let payload = {
        title: this.title,
        category: this.category.toLowerCase(),
        content: this.content
      }
      this.addArticleDb(payload)
    },
    ...mapActions ([
      'addArticleDb'
    ])
  }
}
</script>

<style>

</style>
