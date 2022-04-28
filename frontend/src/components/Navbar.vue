<template>
  <div class="navbar-container" style="position: relative">
    <div class="nav">
      <router-link class="router-link" :to="{ name: 'home' }">
        <div class="title">
          <img :src="require('@/assets/logo_imma.png')" alt="" />
          <span>Prosisel</span>

          <!-- Navigation -->
          <router-link
            class="router-link"
            active-class="active"
            :to="{ name: 'home' }"
            >Home</router-link
          >
          <!-- <router-link
            class="router-link"
            active-class="active"
            :to="{ name: 'home' }"
            >Home</router-link
          > -->
        </div>
      </router-link>
      <nav>
        <div class="action">
          <router-link class="login" :to="{ name: 'login' }">
            <span>Login</span>
          </router-link>
          <router-link class="register" :to="{ name: 'register' }"
            >Register</router-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.router-link {
  text-decoration: none;
  color: black;
}

.nav {
  display: flex;
  position: fixed;
  // border: 1px solid black;
  box-shadow: 1px 0 10px rgba($color: #0000006d, $alpha: 0.12);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: white;
  overflow: hidden;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    align-items: center;

    a.router-link {
      position: relative;
      text-decoration: none;
      color: black;
      margin: 0 8px;
      font-size: 14px;

      &::before {
        position: absolute;
        width: 0;
        top: 20px;
        content: "";
        height: 2px;
        right: 0;
        bottom: 0;
        background: $baseColor;
        transition: width 0.4s ease-in-out;
      }

      &:hover::before {
        left: 0;
        width: 100%;
      }
    }

    img {
      width: 3%;
      height: 3%;
      margin: 0 5px;
    }

    span {
      margin: 0 15px 0 8px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  .action {
    display: flex;
    align-items: center;

    a {
      font-size: 14px;
      color: black;
      text-decoration: none;
    }

    .login {
      display: flex;
      align-items: center;
      margin: 0 2px 0 0;
      padding: 4px 20px;
      border-radius: 3px;
      transition: 0.3s ease-in-out;
    }

    .register {
      background: $baseColor;
      color: white;
      padding: 5px 20px;
      border-radius: 5px;
      transition: 0.3s ease-in-out;

      &:hover {
        // box-shadow: 3px 5px 10px rgba($color: #0000006d, $alpha: 0.18);
        background: lighten($color: $baseColor, $amount: 5);
      }
    }
  }
}
</style>