(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxWxPromisify = nx.wxPromisify || require('next-wx-promisify');
  var wx = global.wx;

  var NxWeappActionsheet = nx.declare('nx.WeappActionsheet', {
    statics: {
      present: function(inOptions) {
        return new Promise(function(resolve, reject) {
          var options = nx.mix(nxWxPromisify(resolve, reject), inOptions);
          wx.showActionSheet(options);
        });
      },
      actions: function(inOptions) {
        return this.present(inOptions);
      },
      dismiss: function() {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappActionsheet;
  }
})();
