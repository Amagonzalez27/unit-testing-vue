<template>
  <div>
    <!-- Output -->
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false, //input
    };
  },
};
</script>
