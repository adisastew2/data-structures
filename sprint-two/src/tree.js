var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;

  if (this.value === target) {
    result = true;
  } else {
    this.children.forEach((child) => {
      result |= child.contains(target);
    });
  }

  return !!result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
