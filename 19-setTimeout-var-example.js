function x() {
  for (var i = 1; i <= 5; i++) {
    //takes new value of i as parameter
    function inside(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    inside(i); // here, creating a new copy of i, every single time setTimeout is called
  }
  // this gets printed first
  console.log("Hi there, It's first print");
}

x();
