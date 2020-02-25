
exports.min = function min (array) {
  if (typeof array !== "undefined" && array.length !== 0) {
    return array.sort(function(a,b){ 
      return a - b
    }).shift();
  } else {
    return 0;
  };  
};

exports.max = function max (array) {
  if (typeof array !== "undefined" && array.length !== 0) {
    return array.sort(function(a,b){ 
      return a - b
    }).pop();
  } else {
    return 0;
  };
};

exports.avg = function avg (array) {
  if (typeof array !== "undefined" && array.length !== 0) {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
  } else {
    return 0;
  };
};
