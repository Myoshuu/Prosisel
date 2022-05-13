<template>
  <div class="container">
    <div class="box">
      <div class="content">
        <Logo />
        <span>Oops!</span>
        <p>We can't seem to find the page you're looking for</p>
      </div>
      <router-link class="back" :to="{ name: 'home' }">
        <fa icon="angle-left" />
        <span> back to home </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  name: "404",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: lighten($color: #000000, $amount: 30);
  .box {
    border: 2px solid lighten($color: #000000, $amount: 30);
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 30px;
    border-radius: 10px;
    transform: translate(-50%, -50%);

    .content {
      span {
        font-size: 60px;
        font-weight: 600;
      }
      p {
        font-size: 25px;
      }
    }
    a.back {
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-top: 15px;
      font-size: 12px;

      svg {
        margin-top: 2px;
      }

      span {
        margin-left: 5px;
      }
    }
  }
}
</style>