'use strict';

import create from './create';

const { id, random, time, iterator } = create('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');

export default { create, id, random, time, iterator };
export { create, id, random, time, iterator };
