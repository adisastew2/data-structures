

var HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Get the 'bucket' array from storage at index
  var bucket = this._storage.get(index);
  // if the 'bucket' array doesn't exist...
  if (!bucket) {
    // initialize and store 'bucket' in storage
    bucket = [];
    this._storage.set(index, bucket);
  }

  // Iterate through elements in 'bucket'
  for (let i = 0; i < bucket.length; i++) {
    var item = bucket[i];
    // if array item key matches...
    if (item['key'] === k) {
      // update item value
      item['value'] = v;
      // and bail
      return;
    }
  }

  // create a new tuple with key and value
  var tuple = [];
  tuple['key'] = k;
  tuple['value'] = v;

  // push tuple onto bucket array
  bucket.push(tuple);

  this._size++;

  if (this._size >= Math.floor(this._limit * 0.75)) {
    this._resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Get the 'bucket' array from storage at index
  var bucket = this._storage.get(index);
  // if the 'bucket' array exists...
  if (bucket) {
    // Iterate through elements in 'bucket'
    for (let i = 0; i < bucket.length; i++) {
      var item = bucket[i];
      // if array item key matches...
      if (item['key'] === k) {
        // return item value
        return item['value'];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // Get the 'bucket' array from storage at index
  var bucket = this._storage.get(index);
  // if the 'bucket' array exists...
  if (bucket) {
    // Iterate through elements in 'bucket'
    for (let i = 0; i < bucket.length; i++) {
      var item = bucket[i];
      // if array item key matches...
      if (item['key'] === k) {
        // slice item out of bucket
        bucket.splice(i, 1);

        this._size--;
      }
    }
  }

  if (this._size <= Math.floor(this._limit * 0.25) && this._limit > 8) {
    this._resize(Math.floor(this._limit / 2));
  }
};

HashTable.prototype._resize = function(newLimit) {
  // put 'storage' in 'tmp'
  var tmp = this._storage;
  
  this._size = 0;
  // set 'limit' to 'newLimit'
  this._limit = newLimit;
  // put a new LimitedArray in 'storage'
  this._storage = LimitedArray(newLimit);
  // iterate over 'tmp'
  tmp.each((bucket) => {
    if (bucket) {
      // iterate over 'bucket'
      bucket.forEach((tuple) => {
        // pass each key and value to insert
        this.insert(tuple['key'], tuple['value']);
      });
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(1), constant time
 * retrieve: O(1), constant time
 * remove: O(1), constant time
 */
