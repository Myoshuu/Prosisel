<template>
  <div class="container-btn">
    <button type="submit">{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap");

.container-btn {
  margin-top: 20px;
}

button {
  width: 100%;
  outline: none;
  cursor: pointer;
  background: $baseColor;
  font-family: "Poppins";
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  letter-spacing: 1.2px;
  transition: background 0.3s ease-in-out;
  //   font-weight: 600;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.271);
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background: $secondaryColor;
  }
}
</style>