'use strict';

export default function (handler) {
  handler.on('push', function (e) {
    const payload = e.payload;
    console.log(payload);
  });
}
