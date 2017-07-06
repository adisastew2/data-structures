var BinarySearchTree = function(value) {
  var obj = Object.create(binarySearchTreeMethods);

  obj.value = value;
  obj.left = obj.right = null;

  return obj;
};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  } else {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  }
};

binarySearchTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (this.right) {
    return this.right.contains(value);
  }

  return false;
};

binarySearchTreeMethods.depthFirstLog = function(func) {
  func(this.value);

  if (this.left) {
    this.left.depthFirstLog(func);
  }

  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
