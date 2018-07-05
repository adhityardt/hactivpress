<template>
  <div>
    <NavBar/>
    <RegisterModal/>
    <LoginModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import RegisterModal from '@/components/RegisterModal.vue'
import LoginModal from '@/components/LoginModal.vue'
export default {
  name: 'mainpage',
  components: {
    NavBar,
    RegisterModal,
    LoginModal
  }
}
</script>
