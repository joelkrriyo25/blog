
// Our data object
var data = { a: 1 }


// The object is added to a Vue instance
var vm = new Vue({
  data: data
})

// Getting the property on the instance
// returns the one from the original data
vm.a == data.a // => true


// Setting the property on the instance
// also affects the original data
vm.a = 2
data.a // => 2

console.log(vm.a == data.a);

// ... and vice-versa
data.a = 3
vm.a // => 3

console.log(vm.a == data.a);


var obj = {
    foo: 'bar'
  }
  
 Object.freeze(obj);
  

 new Vue({
    el: '#app',
    data: obj
  })


  new Vue({
    data: {
      a: 1
    },
    created: function () {
      // `this` points to the vm instance
      console.log('a is: ' + this.a)
    }
  })
  // => "a is: 1"

  