<template>
  <div>
    <NavBar/>
    <RegisterModal/>
    <LoginModal/>
    <AddArticleModal/>
    <ArticleItems/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import RegisterModal from '@/components/RegisterModal.vue'
import LoginModal from '@/components/LoginModal.vue'
import AddArticleModal from '@/components/AddArticleModal.vue'
import ArticleItems from '@/components/ArticleItems.vue'
export default {
  name: 'mainpage',
  components: {
    NavBar,
    RegisterModal,
    LoginModal,
    AddArticleModal,
    ArticleItems
  }
}
</script>
