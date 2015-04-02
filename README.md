
*Inspired by express method override*

**usage:**
```
var method_override = require("koa_method_override")
app.use(method_override());
```

*this will create*
```
 this.request.original_method // hold the original method
 this.method // new method
```