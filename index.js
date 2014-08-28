var simpleLog = (function() {
  var find = /["\\]/g, replace = "\\$&";
  
  return function simpleLog(value) {
    if (typeof value === "string") {
      return "\"" + value.replace(find, replace) + "\"";
    }
    else if(typeof value === "function") {
      return (value.name || "[anonymous]") + "()";
    }
    else if ((value !== null) && (typeof value === "object")) {
      var valueOf = value.valueOf();
      return "[" +
        value.constructor.name +
        (
          (valueOf !== value) && (typeof valueOf !== "object" || valueOf === null)
            ? " (" + simpleLog(valueOf) + ")" : ""
        ) +
      "]";
    }
    
    return "" + value;
  };
})();

if (undefined !== module) {
	module.exports = simpleLog;
}