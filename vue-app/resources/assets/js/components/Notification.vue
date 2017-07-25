<template lang="html">
    <div class="notification">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue'
        }
    }
}
</script>

<style lang="scss">
.notification {
    backgroun: green;
}
</style>
