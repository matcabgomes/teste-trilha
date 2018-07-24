var averageBO = require('../../business/averageBO');

module.exports = function() {
  var business = new averageBO();

  return {
    getAverage: function(req, res)
    {
        request = req.body;
        business
            .getAverage(request)
            .then(function(r){
                res.status(200).json({"response":r});
            })
            .catch(function(error){
                res.status(500).json(error);
            });
    }
  }
};