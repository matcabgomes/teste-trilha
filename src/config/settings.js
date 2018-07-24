var util = require('util');

module.exports = {
    mongoUrl : util.format('mongodb://%s/%s',
                      process.env.DB_SERVER || 'localhost'),
    servicePort : process.env.PORT || 5000
};
