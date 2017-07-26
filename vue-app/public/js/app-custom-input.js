Vue.component('coupon', {
    props: ['code'],

    template: `
        <input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">
    `,

    data() {
        return {
            invalids: ['ALLFREE', 'SOMETHINGELSE']
        }
    },

    methods: {
        updateCode(code) {
            // Validation
            if (this.invalids.includes(code)) {
                alert('유효하지 않은 쿠폰입니다.');

                this.$refs.input.value = code = '';

                return;
            }

            this.$emit('input', code);
        }
    }
});

new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE'
    }
});