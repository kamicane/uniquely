'use strict';

import create from './create';

var { id, random, time, iterator } = create('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');

export { create, id, random, time, iterator };
