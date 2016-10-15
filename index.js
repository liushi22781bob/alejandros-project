
var width = 10
setInterval(function() {
  width = width + 10
  get("#logo").css({width:width})
}, 1000)
