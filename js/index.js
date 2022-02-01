"use strict";

console.group("Map");

const arr = [
  [1, "first"],
  [3, "third"],
];

const map = new Map(arr);

console.log("map.keys() :>> ", map.keys());
console.log("map.values() :>> ", map.values());
console.log("map.size :>> ", map.size);
map.set(5, "fifth");
console.log("map :>> ", map);
map.delete(5);
console.log("map :>> ", map);
console.log("map.has(1) :>> ", map.has(1));

console.groupEnd();

console.group("Set");

const set = new Set();

set.add(1).add(2).add(3);
console.log("set :>> ", set);
console.log("set.has(3) :>> ", set.has(3));
console.log("set.has(4) :>> ", set.has(4));
set.add(4).add(5).add(6);

for (let value of set) {
  console.log(value);
}

console.log("calcValueOfSet(set) :>> ", calcValueOfSet(set));

function calcValueOfSet(set) {
  let i = 0;
  for (let value of set) {
    i += value;
  }
  return i;
}

set.delete(2);
console.log("set :>> ", set);

set.clear();
console.log("set :>> ", set);

const arrNumb = [1, 6, 9, 4, 9, 1, 5, 6];

const setNumb = new Set(arrNumb);
console.log("setNumb :>> ", setNumb);

const arrNumbTwo = [2, 10, 11];

const setUniqueNumb = new Set([...arrNumb, ...arrNumbTwo]);
console.log("setUniqueNumb :>> ", setUniqueNumb);

console.groupEnd();
