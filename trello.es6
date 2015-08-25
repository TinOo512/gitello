'use strict';

import Trello from 'node-trello';

export default {
  t: null,
  _request(method, uri, query) {
    return new Promise((resolve, reject) => {
      this.t[method](uri, query, (err, data) => {
        if (err) return reject(err);

        resolve(data);
      });
    });
  },
  init(key, token) {
    this.t = new Trello(key, token);
  },
  get(uri, query = {}) {
    return this._request('get', uri, query);
  },
  post(uri, query = {}) {
    return this._request('post', uri, query);
  },
  put(uri, query = {}) {
    return this._request('put', uri, query);
  },
  del(uri, query = {}) {
    return this._request('del', uri, query);
  }
};