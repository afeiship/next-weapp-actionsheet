(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = global.wx;

  var NxWeappActionsheet = nx.declare('nx.WeappActionsheet', {
    statics: {
      present: function(inOptions) {
        return new Promise(function(resolve, reject) {
          var options = nx.mix(
            {
              success: function(res) {
                resolve(true);
              },
              fail: function(res) {
                resolve(false);
              }
            },
            inOptions
          );
          wx.showActionSheet(options);
        });
      },
      dismiss: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappActionsheet;
  }
})();
