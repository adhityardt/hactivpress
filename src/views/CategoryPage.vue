<template>
  <div>
    <NavBar/>
    <CategoryItems/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import CategoryItems from '@/components/CategoryItems.vue'
export default {
  name: 'categorypage',
  components: {
    NavBar,
    CategoryItems
  }
}
</script>
