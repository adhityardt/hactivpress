<template>
  <div>
    <NavBar/>
    <AuthorItems/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import AuthorItems from '@/components/AuthorItems.vue'
export default {
  name: 'authorpage',
  components: {
    NavBar,
    AuthorItems
  }
}
</script>
