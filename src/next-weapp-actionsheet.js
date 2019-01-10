(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');

  var NxWeappActionsheet = nx.declare('nx.WeappActionsheet', {
    statics: {
      present: function(inOptions) {
        return new Promise(function(resolve, reject) {
          nx.mix(nxWxPromisify(resolve, reject), inOptions);
        });
      },
      dissmiss: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappActionsheet;
  }
})();
