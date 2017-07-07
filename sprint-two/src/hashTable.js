

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Get the current linked list head
  var tuple = this._storage.get(index)
  while (tuple){
    // if tuple exists, update its value and exit
    if(tuple['key'] === k) {
      tuple['value'] = v;
      return;
    }
    // iterate through linked list
    tuple = tuple['next'];
  }

  // create a new tuple with key, value, and assign
  // current linked list head to next.
  tuple = [];
  tuple['key'] = k;
  tuple['value'] = v;
  tuple['next'] = this._storage.get(index);

  // set new tuple as current head
  this._storage.set(index, tuple);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get linked list head for index
  var tuple = this._storage.get(index);
  
  while (tuple) {
    // if tuple key matches, return value
    if(tuple['key'] === k) {
      return tuple['value'];
    }
    // iterate through linked list
    tuple = tuple["next"];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = this._storage.get(index);

  if (tuple) {
    // tuple head is what we're removing
    if (tuple['key'] == k) {
      // set linked list head to next tuple
      this._storage.set(index, tuple['next']);
    } else {
      // search through linked list for next tuple with key
      while (tuple) {
        if (tuple['next'] && tuple['next']['key'] === k) {
          // remove tuple from linked list
          tuple['next'] = tuple['next']['next'];
          return;
        } else {
          // iterate through linked list
          tuple = tuple['next'];
        }
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


