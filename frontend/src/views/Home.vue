<template>
  <div class="main">
    <Navbar />
    <div class="container">
      <div class="content">
        <p>Welcome to <span class="red">Prosisel</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";

export default {
  name: "Home",

  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 10vh;
  // border: 2px solid black;
}
</style>