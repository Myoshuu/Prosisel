<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  methods: {
    logout() {
      this.$store.dispatch("auth/logoutData");
    },
  },
  components: { Navbar },
};
</script>

<style>
</style>