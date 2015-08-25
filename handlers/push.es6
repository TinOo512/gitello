'use strict';

export default function (handler) {
  handler.on('*', (e) => {
    const payload = e.payload;
    console.log(payload);
  });
}
