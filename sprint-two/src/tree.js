var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);

  child.parent = this;

  this.children.push(child);
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

treeMethods.removeFromParent = function() {
  if (this.parent) {
    // remove self from parent children
    var siblings = this.parent.children;
    siblings.splice(siblings.indexOf(this), 1);
    // set parent to null
    this.parent = null;
  }  
};

treeMethods.traverse = function(cb) {
  cb(this.value);

  this.children.forEach(child => child.traverse(cb));
};

/*
 * Complexity: What is the time complexity of the above functions?
 * constructor: O(1), constant time
 * addChild: O(1), constant time
 * contains: O(n), linear time
 */
