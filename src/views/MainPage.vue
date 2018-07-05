<template>
  <div>
    <NavBar/>
    <RegisterModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import RegisterModal from '@/components/RegisterModal.vue'
export default {
  name: 'mainpage',
  components: {
    NavBar,
    RegisterModal
  }
}
</script>
