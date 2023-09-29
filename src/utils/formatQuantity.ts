import { chunk } from 'chunk-arr';

const formatQuantity = (num: number): string => {
  return chunk(Array.from(num.toString()).reverse(), 3)
    .map(ch => ch.reverse().join(''))
    .reverse()
    .join(' ');
};

export default formatQuantity;
