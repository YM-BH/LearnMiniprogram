// components/my-event/my-event.js
Component({
  methods: {
    increment() {
      this.triggerEvent("increment", {name: "JA", age: 20}, {})
    }
  }
})
