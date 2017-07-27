import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from '../src/Notification';

let vm;

test.beforeEach(t => {
    let N = Vue.extend(Notification);
    // let n = new Vue(Notification).$mount();

    vm = new N({ propsData: {
        message: 'Foobar'
    } }).$mount();

    t.is(vm.$el.textContent, 'FOOBAR');
});

test('that it renders a notification', t => {
    t.is(vm.$el.textContent, 'FOOBAR');
});

test('that it computes notification', t => {
    t.is(vm.notification, 'FOOBAR');
});

// test('that it capitalize the message', t => {
//     let N = Vue.extend(Notification);
//     // let n = new Vue(Notification).$mount();
//
//     let vm = new N({ propsData: {
//         message: 'foobar'
//     } }).$mount();
//
//     t.is(vm.$el.textContent, 'FOOBAR');
// });