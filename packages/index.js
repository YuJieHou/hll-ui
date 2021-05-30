import HllTest from './test/index'
import HllTag from './tag/index'

const components = [
    HllTest,
    HllTag
]

const install = function(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window.Vue !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    HllTest,
    HllTag
}
