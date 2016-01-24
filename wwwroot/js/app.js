var Hello = (function () {
    function Hello() {
    }
    Hello.World = function () {
        return "hello world";
    };
    return Hello;
})();
console.info(Hello.World());
$(function () {
    $("#btnPart").click((e) => {
        $("#partial").load("Home/Partial");
    });    
});
