'use strict';

import trello from '../trello';

export default function (handler) {
  handler.on('*', (e) => {
    const payload = e.payload;
    console.log(payload);
  });
}
