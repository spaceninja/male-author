import vocabulary from '../data/vocabulary.json';

import sample from 'lodash.sample';
import random from 'lodash.random';

// eslint-disable-next-line no-console
console.log('RANDOM', random(0, 5));

// eslint-disable-next-line no-console
console.log('SAMPLE', sample([1, 2, 3, 4]));

// eslint-disable-next-line no-console
console.log('Hello Project.');

// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);

// eslint-disable-next-line no-console
console.log(vocabulary);
