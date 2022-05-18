<template>
  <div>
    <nav class="p-3 flex items-center">
      <div class="title mr-5">
        <p class="text-lg text-black">Prosisel</p>
      </div>
      <div class="flex">
        <div class="flex">
          <router-link :to="{ name: 'profile' }">Profile</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>