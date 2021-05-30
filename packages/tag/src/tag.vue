<script>
export default {
    name: 'hll-tag',
    props: {
        text: String,
        closable: Boolean,
        type: String,
        color: String,
        size: String,
        hit: Boolean,
        effect: {
            type: String,
            default: 'light',
            validator(val) {
                return ['light', 'dark', 'plain'].indexOf(val) !== -1
            }
        }
    },
    methods: {
        handleClose(event) {
            event.stopPropagation()
            this.$emit('close', event)
        },
        handleClick(event) {
            this.$emit('click', event)
        }
    },
    computed: {
        tagSize() {
            return this.size || (this.$ELEMENT || {}).size
        }
    },
    render(h) {
        const { type, tagSize, hit, effect } = this
        const classes = [
            'hll-tag',
            type ? `hll-tag--${type}` : '',
            tagSize ? `hll-tag--${tagSize}` : '',
            effect ? `hll-tag--${effect}` : '',
            hit && 'is-hit'
        ]
        const closeIcon = this.closable
            ? h('i', {
                on: {
                    click: this.handleClose
                }
            }, ['x']) : ''
        return h('span', {
            'class': classes,
            style: { 'backgroundColor': this.color },
            on: {
                click: this.handleClick
            }
        }, [this.$slots.default, closeIcon])
    }
}
</script>
