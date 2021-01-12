import { mount } from "@vue/test-utils";
import App from "@/App.vue";
const wrapper = mount(App);
const vm = wrapper.vm;

console.log(vm.$data);
