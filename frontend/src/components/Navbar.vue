<template>
  <div class="navbar">
    <nav class="p-3 flex items-center border-b rounded-lg">
      <div class="title mr-5">
        <router-link :to="{ name: 'home' }">
          <p class="text-lg text-black">Prosisel</p>
        </router-link>
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

    <!-- Modal -->
    <div
      class="modal absolute top-12 z-10 border p-1 rounded-lg bg-white w-40 right-[15px]"
    >
      <div
        class="flex rounded-md hover:bg-rose-400 hover:text-white transition-colors py-1 cursor-pointer px-3 items-center gap-2"
        @click="$emit('logout')"
      >
        <!-- ^^ like props (pass method to parent) -->
        <fa icon="arrow-right-to-bracket" />
        <span>Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: localStorage.role,
    };
  },
  methods: {
    toggle() {
      document.querySelector(".modal").classList.toggle("active");
    },
  },
};
</script>

<style>
.navbar {
  width: 100vw;
  height: 100vh;
}
.modal {
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  transition: 0.2s ease-in-out;
}

.modal.active {
  visibility: visible;
  opacity: 1;
  z-index: 1;
}
</style>
