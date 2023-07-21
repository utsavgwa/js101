function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  // this gets printed first
  console.log("Hi there, It's first print");
}
x();
