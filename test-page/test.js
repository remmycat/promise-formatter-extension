function runTests(){
  window.resolved = Promise.resolve('Resolved value');
  console.log(window.resolved);

  window.reject = Promise.reject('Rejection reason');
  console.log(window.reject);

  window.delayed = Promise.delay(5000).then(() => 'Resolved after 500ms');
  console.log(window.delayed);
  window.delayed.then(() => {
    console.log(window.delayed);
  });
}
