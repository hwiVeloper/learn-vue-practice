Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">
                {{ task.description }}
            </task>
        </div>`,

    data() {
        return {
            tasks: [
                { description: 'Go to the store', completed: true },
                { description: 'Finish Screencast', completed: false },
                { description: 'Make donation', completed: false },
                { description: 'Clear inbox', completed: false },
                { description: 'Make dinner', completed: true },
                { description: 'Clean room', completed: false },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>',
});

Vue.component('message', {
    props: [
        'title', 'body'
    ],

    data() {
        return {
            isVisible: true
        }
    },

    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            {{ title }}

            <button type="button" @click="hideModal">Hide</button>
        </div>

        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

Vue.component('modal', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <slot></slot>
            </div>
        </div>
        <button class="modal-close is-large" @click="$emit('close')"></button>
    </div>
    `,

    methods: {
        showModal() {

        }
    }
});

Vue.component('tabs', {
    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,

    data() {
        return { tabs: [] };
    },

    mounted() {
        console.log(this.$children);
    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
    <div v-show="isActive"><slot></slot></div>
    `,

    props: {
        name: { required: true },
        selected: { default: false },
    },

    data() {
        return {
            isActive: false
        };
    },

    computed: {
        href() {
            // about-our-culture
            return '#' + this.name.toLowerCase().replace('/ /g', '-');
        }
    },

    mounted() {
        this.isActive = this.selected;
    }
});

window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
};

Vue.component('coupon', {
    template: `
    <input placeholder="Enter your coupon code." @blur="onCouponApplied">
    `,

    methods: {
        onCouponApplied() {
            Event.fire('applied');
        }
    }
});

Vue.component('modal-nutshell', {
    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">
                    <slot name="header"></slot>
                </p>
                <button class="delete"></button>
            </header>
            <section class="modal-card-body">
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
    `,
});

Vue.component('progress-view', {
    data() {
        return { completionRate: 0 };
    }
});

new Vue({
    el: '#root',

    data: {
        showModal: false,
        couponApplied: false
    },

    created() {
        Event.listen('applied', () => alert('Handling it !'));
    }
});