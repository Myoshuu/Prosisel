<template>
  <div class="login border rounded-lg p-5">
    <router-link
      class="text-sm mb-2 text-blue-700 flex items-center gap-1"
      :to="{ name: 'home' }"
    >
      <span class="text-xs"> <fa icon="chevron-left" /> </span>
      <p>Back</p>
    </router-link>
    <div class="text-2xl font-medium title">Login</div>
    <div class="text-md opacity-50 mb-5 title">
      Don't have any account?
      <router-link
        class="text-blue-700 hover:underline transition duration-200"
        :to="{ name: 'register' }"
        >register</router-link
      >
    </div>
    <form @submit.prevent="login(user)" method="post" class="border-5">
      <!-- End -->
      <div class="mt-3">
        <div class="input-wrapper flex flex-col">
          <label for="email" class="relative">
            <input
              class="
                nice-input
                border
                rounded-lg
                h-10
                w-full
                text-sm
                p-2
                border-black border-opacity-50
                outline-none
                focus:border-blue-500
                transition
                duration-200
              "
              type="email"
              name="email"
              id="email"
              placeholder="a"
              v-model="user.email"
            />
            <span
              class="
                mx-3
                text-md
                top-2
                absolute
                left-0
                transition
                duration-200
                input-text
              "
              >Email</span
            >
          </label>
        </div>
      </div>
      <div class="mt-3">
        <div class="input-wrapper flex flex-col">
          <label for="password" class="relative">
            <input
              class="
                nice-input
                border
                rounded-lg
                h-10
                w-full
                text-sm
                p-2
                border-black border-opacity-50
                outline-none
                focus:border-blue-500
                transition
                duration-200
              "
              type="password"
              name="password"
              id="password"
              placeholder="a"
              v-model="user.password"
            />
            <span
              class="
                text-md
                top-2
                mx-3
                absolute
                left-0
                transition
                duration-200
                input-text
              "
            >
              Password</span
            >
          </label>
        </div>
      </div>
      <div class="action mt-3">
        <Button class="w-full" type="submit" text="Login" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login(user) {
      this.$store.dispatch("auth/loginData", user);
    },
  },
  components: { Button },
  mounted() {
    // Check if token in localStorage | if value true => stay home
    if (localStorage.token) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
}
</style>