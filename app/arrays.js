exports = typeof window === 'undefined' ? global : window;
exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var index = 0; index < arr.length; index++) {
      if (arr[index] === item) {
        return index;
      }
    }
    return -1;
  },

  sum: function(arr) {
    return arr.reduce(function(item1, item2) {
      return item1 + item2;
    }, 0);
  },

  remove: function(arr, item) { //mutates
    for (var index = 0; index < arr.length; index++) {
      if(arr[index] === item) {
        arr.splice(index--, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) { //mutates
    return arraysAnswers.remove(arr, item);
  },

  append: function(arr, item) { //mutates
    arr.push(item);
    return arr;
  },

  truncate: function(arr) { //mutates
    arr.splice(arr.length - 1);
    return arr;
  },

  prepend: function(arr, item) { //mutates
    arraysAnswers.append(arr, arr[arr.length - 1]);
    for (var index = arr.length - 3; index >= 0; index--) {
      arr[index + 1] = arr[index];
    }
    arr[0] = item;
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    arr2.forEach(function(item) {
      arr1.push(item);
    });
    return arr1;
  },

  insert: function(arr, item, index) {
    var arr1 = arr.slice(0, index);
    arr1.push(item);
    var arr2 = arr.slice(index, arr.length);
    return arraysAnswers.concat(arr1, arr2);
  },

  count: function(arr, item) {
    var counter = 0;
    arr.forEach(function(val) {
      val === item && counter++;
    });
    return counter;
  },

  duplicates: function(arr) {
    var dupes = [];
    for (var index = 0; index < arr.length; index++) {
      var item = arr[index];
      if (dupes.indexOf(item) === -1 && arr.indexOf(item) !== arr.lastIndexOf(item)) {
        dupes.push(item);
      }
    }
    return dupes;
  },

  square: function(arr) {
    return arr.map(function(item) {return item * item;});
  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    arr.forEach(function(item, index) {
      item === target && indexes.push(index);
    });
    return indexes;
  }
};
