module.exports = function reverse (n) {
    var str = n.toString();
   var arr = str.split("").reverse().join("");
   var int = parseInt(arr);
  return int;
}
