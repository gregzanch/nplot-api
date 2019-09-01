export function splitEvery(str: string, n: number) {
  var arr = new Array();
  for (var i = 0; i < str.length; i += n) {
    arr.push(str.substr(i, n));
  }
  return arr;
}

type CallbackIterator = (i: number) => any;
export function arraygen(length: number, func: CallbackIterator) {
  return Array(length).fill(0).map((_, i) => func(i))
}
