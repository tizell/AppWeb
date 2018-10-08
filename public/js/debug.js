var DEBUG = true;

if (!DEBUG) {
    if (!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "error"];
    for (var i = 0; i < methods.length; i++) {
        console[methods[i]] = function() {};
    }
}