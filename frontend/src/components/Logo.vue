<template>
  <div class="container">
    <router-link :to="{ name: 'home' }">
      <div class="logo">
        <img :src="require('@/assets/logo_imma.png')" alt="" />
        <div>
          <p>Prosisel</p>
          <p class="subtitle">SMK Immanuel Pontianak</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.logo {
  display: flex;
  align-items: center;
  margin-bottom: 5vh;

  img {
    width: 5%;
    margin-top: 6px;
  }

  p {
    margin-left: 10px;
    font-size: 15px;
    font-weight: 600;
    color: $baseColor;

    &.subtitle {
      font-size: 10px;
      color: black;
      font-weight: 300;
      line-height: 5px;
    }
  }
}
</style>