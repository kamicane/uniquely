'use strict';

import now from 'microseconds/now';
import createIterator from 'es6-util/iterator/create';

export default function create(chars) {

  var length = chars.length;

  var id = (i) => {
    return (i < length) ? chars[i] : id(Math.floor(i / length) - 1) + chars[i % length];
  };

  var random = (n = 1) => {
    var string = '';
    for (var i = 0; i < n; i++) string += id(Math.floor(Math.random() * length));
    return string;
  };

  var time = () => id(now());

  var next = () => {
    var i = 0;
    return () => ({ value: id(i++), done: false });
  };

  var iterator = () => createIterator(next());

  return { id, random, time, iterator };

}
