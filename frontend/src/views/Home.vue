<template>
  <div class="home">
    <div v-if="token">
      <nav class="p-3 flex items-center border-b rounded-lg">
        <div class="title mr-5">
          <p class="text-lg text-black">Prosisel</p>
        </div>
        <div class="flex justify-between items-center text-slate-700 w-full">
          <div class="flex gap-3 items-center">
            <router-link :to="{ name: 'profile' }">Profile</router-link>
            <div v-if="role === 'admin'">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
            </div>
          </div>
          <div class="text-2xl cursor-pointer" @click="toggle">
            <fa icon="circle-user" />
          </div>
        </div>
      </nav>
    </div>

    <!-- Modal -->
    <div
      class="
        modal
        absolute
        top-12
        z-10
        border
        p-1
        rounded-lg
        bg-white
        w-40
        right-[15px]
      "
    >
      <div
        class="
          flex
          rounded-md
          hover:bg-rose-400 hover:text-white
          transition-colors
          py-1
          cursor-pointer
          px-3
          items-center
          gap-2
        "
      >
        <fa icon="arrow-right-to-bracket" />
        <span>Logout</span>
      </div>
    </div>

    <div class="centered">
      <div class="text-center">
        <p class="text-xl">Welcome to Prosisel</p>
        <p class="text-sm text-slate-500">Web Profile Siswa SMK</p>
      </div>
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
</template>

<script>
import Button from "../components/Button.vue";

export default {
  data() {
    return {
      token: localStorage.token,
      role: localStorage.role,
    };
  },
  methods: {
    toggle() {
      document.querySelector(".modal").classList.toggle("active");
    },
  },
  components: { Button },
};
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
}

.centered {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal {
  opacity: 0;
  z-index: -1000;
  transition: 0.2s ease-in-out;
}

.modal.active {
  opacity: 1;
  z-index: 1;
}
</style>