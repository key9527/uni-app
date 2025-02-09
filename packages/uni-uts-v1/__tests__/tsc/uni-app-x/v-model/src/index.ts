export const __sfc__ = defineComponent({
  setup() {
    const __ins = getCurrentInstance()!
    const modelValue = useModel<string>(__ins.props, 'modelValue')
    modelValue.value = '123'
    const msg = useModel<string>(__ins.props, 'msg')
    msg.value = '123'
    const num = useModel<number>(__ins.props, 'num')
    num.value = 1
  },
})
