<template>
  <button
    class="
      border
      rounded-lg
      text-white
      transition-colors
      bg-blue-700
      hover:bg-blue-800
      px-5
      py-1
      h-10
    "
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
  },
};
</script>

<style>
</style>