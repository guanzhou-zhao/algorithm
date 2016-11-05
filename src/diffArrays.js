export default function diff(arr1, arr2) {
  const newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
    return false;
  }

  return newArr.filter(check);
}
