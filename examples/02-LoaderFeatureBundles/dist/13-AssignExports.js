require.bundle("", function(require)
{
    function define(id, dependencies, moduleInitializer)
    {
        return function(require, exports, module) {
            if (typeof moduleInitializer === "function") {
                return moduleInitializer.apply(moduleInitializer, dependencies.map(function(name) {
                    if (name === "require") return require;
                    if (name === "exports") return exports;
                    if (name === "module") return module;
                    return require(name);
                }))
            } else
            if (typeof dependencies === "object") {
                return dependencies;
            }
        }
    }
    require.memoize("/main.js", define('',['require','exports','module'],function(require, exports, module)
    {
        module.exports = {
        	main: function(options)
        	{
        		module.log("Hello from 13-AssignExports!");
        	}
        };
    }));
    require.memoize("/package.json", {"main":"/main.js","directories":{"lib":""},"mappings":{}});
});