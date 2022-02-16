Page({
  data: {
    name: "詹姆斯",
    age: 37,
    players: [
      {id: 110, name: "LBJ", age: 37},
      {id: 111, name: "Curry", age: 33},
      {id: 112, name: "Melo", age: 38},
      {id: 113, name: "O'neal", age: 46},
    ],
    counter: 0
  },

  increment() {
    this.setData({
      counter: this.data.counter += 1
    })
  },

  decrement() {
    this.setData({
      counter: this.data.counter -= 1
    })
  }
})