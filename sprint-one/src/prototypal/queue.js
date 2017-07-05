var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.length = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue: function() {
    if (this.length > 0) {
      var value = this.storage[0];

      this.length--;
      for (var i = 0; i < this.length; i++) {
        this.storage[i] = this.storage[i + 1];
      }

      return value;
    }
  },
  size: function() {
    return this.length;
  }
};
