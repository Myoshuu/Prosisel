<template>
  <div class="register border rounded-lg p-5">
    <div class="text-2xl font-medium title">Register</div>
    <div class="text-md opacity-50 mb-5 title">
      Already have an account?
      <router-link
        class="text-blue-700 hover:underline transition duration-200"
        :to="{ name: 'login' }"
        >login</router-link
      >
    </div>
    <form @submit.prevent="register(user)" method="post" class="border-5">
      <div class="flex gap-3">
        <div class="input-wrapper flex flex-col">
          <label for="nama" class="relative">
            <input
              class="
                nice-input
                border
                rounded-lg
                h-10
                w-52
                text-sm
                p-2
                border-black border-opacity-50
                outline-none
                focus:border-blue-500
                transition
                duration-200
              "
              type="text"
              name="nama"
              id="nama"
              placeholder="a"
              v-model="user.nama"
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
              >Nama</span
            >
          </label>
        </div>
        <div class="input-wrapper flex flex-col">
          <label for="email" class="relative">
            <input
              class="
                nice-input
                w-52
                border
                rounded-lg
                h-10
                text-sm
                p-2
                invalid:border-pink-500 invalid:text-pink-600
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
      <!-- End -->
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
                mx-3
                text-md
                top-2
                absolute
                left-0
                transition
                duration-200
                input-text
              "
              >Password</span
            >
          </label>
        </div>
      </div>
      <div class="mt-3">
        <div class="input-wrapper flex flex-col">
          <label for="confirm_pass" class="relative">
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
              name="confirm_pass"
              id="confirm_pass"
              placeholder="a"
              v-model="user.confirm_password"
            />
            <span
              class="
                text-md
                top-2
                absolute
                mx-3
                left-0
                transition
                duration-200
                input-text
              "
              >Confirm Password</span
            >
          </label>
        </div>
      </div>
      <div class="action mt-3">
        <Button class="w-48" type="submit" text="Register" />
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
        nama: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    register(user) {
      this.$store.dispatch("auth/registerData", user);
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.register {
  position: absolute;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
}
</style>