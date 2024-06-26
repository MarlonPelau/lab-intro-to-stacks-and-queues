// testing both Stack and Queue files
const Stack = require('./Stack');
const Queue = require('./Queue');

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
];

const numStack = new Stack();
nums.forEach(num => numStack.push(num));
console.log('Stack size:', numStack.size());
console.log('Stack peek:', numStack.peek());
console.log('Stack min:', numStack.findMin());
numStack.sort();
console.log('Stack sorted:');
while (!numStack.isEmpty()) {
    console.log(numStack.pop());
  }

  const wordQueue = new Queue();
  panagram.forEach(word => wordQueue.enqueue(word));

// console.log('Queue count:', wordQueue.count());
// console.log('Queue peek:', wordQueue.peek());
// console.log('Queue max:', wordQueue.findMax());
console.log('Queue last:', wordQueue.getLast());
console.log('Queue dequeue:');
while (!wordQueue.isEmpty()) {
    console.log(wordQueue.dequeue());
  }