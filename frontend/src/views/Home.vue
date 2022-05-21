<template>
  <div class="home">
    <div v-if="token">
      <!-- Get the method (same like $emit ($emit(logout) -> @logout="")) -->
      <Navbar @logout="logout" />
    </div>

    <!-- Home Content -->
    <div class="centered">
      <div class="text-center">
        <p class="text-xl">Welcome to Prosisel</p>
        <p class="text-sm text-slate-500">Web Profile Siswa SMK</p>
      </div>
      <div v-if="!token">
        <!-- Login Register button -->
        <div class="flex justify-center mt-5">
          <div class="flex items-center gap-2">
            <router-link
              class="
                border
                flex
                items-center
                justify-between
                gap-2
                px-5
                py-2
                rounded-lg
                text-white
                transition-colors
                bg-blue-600
                hover:bg-blue-700
              "
              :to="{ name: 'register' }"
            >
              <p>Get Started</p>
              <span>
                <fa class="text-white" icon="arrow-right" />
              </span>
            </router-link>
            <router-link
              class="
                border
                px-5
                py-2
                rounded-lg
                transition-colors
                hover:bg-blue-700 hover:text-white
              "
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  data() {
    return {
      token: localStorage.token,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logoutData");
      this.token = null;
    },
  },
  components: { Button, Navbar },
};
</script>

<style scoped>
.centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>