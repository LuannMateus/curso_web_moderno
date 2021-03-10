<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from "vuex";
import Tree from "liquor-tree";

export default {
  name: "Menu",
  components: { Tree },
  computed: mapState(["isMenuVisible"]),
};
</script>

<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  transition: 2s;
}
</style>