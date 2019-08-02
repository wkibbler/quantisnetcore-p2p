'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on quantisnetcore-p2p Module {0}'
};

module.exports = require('quantisnetcore-lib').errors.extend(spec);
