var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Queue.prototype.dequeue = function() {
  if (this._size > 0) {
    var value = this._storage[0];

    this._size--;
    for (let i = 0; i < this._size; i++) {
      this._storage[i] = this._storage[i + 1];
    }

    return value;
  }
};

Queue.prototype.size = function() {
  return this._size;
};
