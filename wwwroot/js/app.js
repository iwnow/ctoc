var Hello = (function () {
    function Hello() {
    }
    Hello.World = function () {
        return "hello world";
    };
    return Hello;
})();
console.info(Hello.World());
