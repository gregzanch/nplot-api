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

export function transpose(array: any): any {
  return array[0].map((_: any, i: number) => array.map((row: any) => row[i]));
}

export function shuffle<T>(array: Array<T>): Array<T>{
  let m: number = array.length;
  let t: T;
  let i: number;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
