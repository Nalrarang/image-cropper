import { expect } from 'chai'
import Hello from '@/components/Hello.vue'

describe('Hello.vue', () => {
  it('#propsData', () => {
    const propsData = {
      name: 'World',
      initialEnthusiasm: 3
    }
    const vm = new Hello({
      el: document.createElement('div'),
      propsData
    })

    expect(vm.name).to.equals(propsData.name)
    expect(vm.enthusiasm).to.equals(propsData.initialEnthusiasm)
    expect(vm.exclamationMarks).to.have.lengthOf(propsData.initialEnthusiasm)
  })
})
