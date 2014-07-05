'use strict';

import create from './create';

var x = create('0123456789abcdef').random;
var y = create('89abcdef').random;

export default function uuid() {
  return [ x(8), x(4), '4' + x(3), y(1) + x(3), x(12) ].join('-') ;
}
