var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head) {
      list.tail.next = node;
      list.tail = node;
    } else { list.head = list.tail = node; }
  };

  list.removeHead = function() {
    var headVal = list.head.value;

    list.head = list.head.next;

    return headVal;
  };

  list.contains = function(target) {
    for (var node = list.head; node !== null; node = node.next) {
      if (node.value === target) {
        return true;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addToTail: O(1), constant time
 * removeHead: O(1), constant time
 * contains: O(n), linear time
 */
