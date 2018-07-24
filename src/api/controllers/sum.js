var sumBO = require('../../business/sumBO');

module.exports = function() {
  var business = new sumBO();

  return {
    getSum: function(req, res)
    {
        request = req.body;
        business
            .getSum(request)
            .then(function(r){
                res.status(200).json({"response":r});
            })
            .catch(function(error){
                res.status(500).json(error);
            });
    }
  }
};