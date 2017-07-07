

var HashTable = function() {
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
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


