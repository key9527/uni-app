export const __sfc__1 = defineComponent({
  props: ['str', 'num'],
  setup() {
    const __ins = getCurrentInstance()!
    const _ctx = __ins.proxy as InstanceType<typeof __sfc__1>
    return () => {
      _ctx.str
      _ctx.num
    }
  },
})

export const __sfc__2 = defineComponent({
  props: {
    str: {
      type: String,
    },
    num: {
      type: Number,
    },
    // bool: {
    //   type: Boolean,
    // },
    arr: {
      type: Array<string>,
    },
    obj: {
      type: Object,
    },
    date: {
      type: Date,
    },
  },
  data() {
    return {
      dNum: 1,
    }
  },
})
export function render(this: InstanceType<typeof __sfc__2>): any | null {
  const _ctx = this
  _ctx.str
  // _ctx.bool
  _ctx.dNum
}
