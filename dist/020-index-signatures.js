"use strict";
//strings to be used as keys and the  keys has to be mapped to number-value
const counters = {};
counters['Likes'] = 1;
counters['Comment'] = 2;
counters['Shares'] = 100;
const mm = { likes: 1, views: 100, shares: 23 };
//dynamic  keys at run time
const priceMap = new Map();
priceMap.set('likes', 1);
const lm = {};
lm['x'] = undefined;
lm['y'] = 100;
