<template>
  <div class="home">
    <home-title />
    <home-form />
  </div>
</template>

<script>
import HomeForm from "./HomeForm.vue";
import HomeTitle from "./HomeTitle.vue";

export default {
  name: "Home",
  components: { HomeTitle, HomeForm },
};
</script>
