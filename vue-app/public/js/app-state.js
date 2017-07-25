let store = {
    user: {
        name: 'Jonghwi Lee'
    }
}

new Vue({
    el: '#one',

    data: {
        foo: 'bar',
        shared: store
    }
});

new Vue({
    el: '#two',

    data: {
        foo: 'other bar',
        shared: store
    }
});