import HllTest from './src/test.vue'

// 支持按需引用
HllTest.install = function(Vue) {
    Vue.component(HllTest.name, HllTest)
}

export default HllTest
