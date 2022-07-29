// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(function(item, index, _array){
    if (item === "Waldo") {
      found(index);   // execute callback
    }
  })
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(i) {
  console.log("Found him at index " + i + "!");
});