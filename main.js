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

new Vue({
    el: '#root'
})