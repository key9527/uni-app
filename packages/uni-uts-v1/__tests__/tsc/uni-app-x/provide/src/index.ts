export const __sfc__1 = defineComponent({
  provide() {
    return {
      msg: 'hello',
    }
  },
})
export const __sfc__2 = defineComponent({
  inject: {
    str: {
      type: String,
      default: 'str',
    },
  },
  data() {
    return {
      a: '',
    }
  },
  render() {
    this.str
  },
})

export function render(this: InstanceType<typeof __sfc__2>) {
  const _ctx = this
  _ctx.str
}