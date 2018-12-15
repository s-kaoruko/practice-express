<template>
  <div class="hello">
    <button type="button" @click="click">get</button>
    <textarea v-model="test"></textarea>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  computed: {
    test () {
      return this.$store.getters.test
    }
  },
  methods: {
    click () {
      this.$store.dispatch('TEST')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
textarea{
  display: block;
  margin: 20px auto 0;
}
</style>
