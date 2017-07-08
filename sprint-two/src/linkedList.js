var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {
    var node = Node(value);
    // if no tail...
    if (list.tail === null) {
      // new node is tail
      list.tail = node;
    }
    // new node next = head
    node.next = list.head;
    // head = new node
    list.head = node;
  };

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

    if (list.head === null) {
      list.tail = null;
    }

    return headVal;
  };

  list.removeTail = function() {
    if (list.head === list.tail) {
      var nodeVal = list.head.value;
      list.head = list.tail = null;
      return nodeVal;
    }

    for (var node = list.head; node !== null; node = node.next) {
      if (node.next === list.tail) {
        var nodeVal = node.next.value;
        node.next = null;
        list.tail = node;
        return nodeVal;
      }
    }
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
