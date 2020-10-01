
exports.min = function min (arr) {
  if ((Array.isArray(arr)) && arr.length > 0) {
    let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }

  return result;
  } else {
    return 0;
  }
}

exports.max = function max (arr) {
  if ((Array.isArray(arr)) && arr.length > 0) {
    let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }

  return result;
  } else {
    return 0;
  }
}

exports.avg = function avg (arr) {
  if ((Array.isArray(arr)) && arr.length > 0) {
    let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return result = sum / arr.length;
  } else {
    return 0;
  }
}
