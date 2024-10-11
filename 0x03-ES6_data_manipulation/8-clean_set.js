export default function cleanSet(set, startString) {
  let returnStr = '';
  if (startString === '') {
    return returnStr; // Return an empty string if startString is empty
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      returnStr += `${value.slice(startString.length)}-`;
    }
  });
  return returnStr.slice(0, -1);
}
