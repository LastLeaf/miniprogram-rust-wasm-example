import { sum, hello_world } from '../rust-mod/pkg/rust_mod'

Page({
  data: { },
  onLoad: function () {
    this.setData({
      hello: hello_world(),
      sum: sum(1, 2)
    })
  },
})
