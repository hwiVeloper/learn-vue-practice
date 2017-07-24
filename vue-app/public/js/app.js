Vue.prototype.$http = axios;

new Vue({
    el: '#app',

    data: {
        skills: []
    },

    mounted() {
        // Make an ajax request to our server -> skills

        // axios.get('skills').then(response => this.skills = response.data);
        this.$http.get('skills').then(response => this.skills = response.data);
    }
});