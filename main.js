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

new Vue({
    el: '#root'
})