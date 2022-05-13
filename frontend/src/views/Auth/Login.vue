<template>
  <div class="container">
    <div class="form-parent">
      <router-link :to="{ name: 'home' }">
        <div class="logo">
          <img :src="require('@/assets/logo_imma.png')" alt="" />
          <div>
            <p>Prosisel</p>
            <p class="subtitle">SMK Immanuel Pontianak</p>
          </div>
        </div>
      </router-link>

      <form @submit.prevent="login(auth)" method="post">
        <!-- Title -->
        <div class="welcome">
          <p>Welcome Back!!</p>
          <span>Please Log in to your account.</span>
        </div>

        <!-- Form -->
        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="email"
            style="margin-bottom: 15px"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            v-model="auth.email"
          />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            v-model="auth.password"
          />
        </div>
        <div class="details">
          <p>
            Don't have an account?
            <router-link :to="{ name: 'register' }"> Register </router-link>
          </p>
        </div>
        <Button label="login" />
      </form>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import axios from "axios";

export default {
  name: "Login",
  components: {
    Button,
  },
  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
      isAuthenticated: false,
    };
  },
  methods: {
    login(auth) {
      axios
        .post(`${this.url}/auth/login`, auth)
        .then((res) => {
          // console.log(res.data.user.status);
          // if (res.data.user.status !== "admin") {
          //   this.$router.push("/");
          // } else {
          // }
        })
        .catch((err) => {
          console.log(err.response.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: #e3eaef;
}

a {
  text-decoration: none;
}

.form-parent {
  display: flex;
  justify-content: center;
  //   align-items: center;
  position: absolute;
  top: 50%;
  background: white;
  left: 50%;
  border-top: 2px solid #2172bd;
  padding: 30px;
  transform: translate(-50%, -50%);
  flex-direction: column;
  width: 350px;
  box-shadow: 1px 1px 30px 0 #767a7d54;
  border-radius: 5px;

  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 5vh;

    p {
      margin-left: 10px;
      font-size: 15px;
      font-weight: 600;
      color: #2172bd;

      &.subtitle {
        font-size: 10px;
        color: black;
        font-weight: 300;
        line-height: 5px;
      }
    }
  }

  form {
    .welcome {
      margin-bottom: 3vh;
      color: lighten($color: #000000, $amount: 20);
      line-height: 25px;

      p {
        font-weight: 600;
        font-size: 20px;
      }

      span {
        font-weight: 100;
        font-size: 13px;
      }
    }

    .form-control {
      position: relative;

      label {
        font-size: 12px;
        color: lighten($color: #000000, $amount: 50);
      }

      input {
        padding: 12px 10px;
        width: 100%;
        // line-height: 20px;
        border-radius: 5px;
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.271);
        transition: 0.2s ease-in-out;

        &:hover {
          border: 1.8px solid black;
        }
        &:focus {
          border: 1.8px solid black;
        }
      }
    }
  }

  img {
    width: 10%;
    margin-top: 6px;
  }

  .details {
    margin-top: 12px;
    font-size: 12px;
    color: lighten($color: #000000, $amount: 30);
    p {
      a {
        text-decoration: none;
      }
    }
  }
}
</style>