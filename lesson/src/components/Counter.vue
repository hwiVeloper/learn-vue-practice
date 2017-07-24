<template lang="html">
  <div class="">
      <h2>The Count : {{ count }}</h2>

      <p>
          <button type="button" @click="count += 2">Increment</button>
      </p>
  </div>
</template>

<script>
export default {
    data() {
        return { count: 0 };
    }
}
</script>

<style lang="css">
</style>
