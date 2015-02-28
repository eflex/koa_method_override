var override = require("koa-override-method");

/**
  inspired by express method override
  this.request.original_method - hold the original method
  this.method - new method
*/

module.exports = function (){
  return function * (next){
    var body = this.request.body;
    this.request.original_method = this.method;
    this.request.method = override.call(this, body);

    yield* next;
  }
};