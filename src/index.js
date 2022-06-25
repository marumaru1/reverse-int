module.exports = function reverse (n) {
    let reverse = n.toString().split('').reverse().join('');
    if (reverse.endsWith('-')) {
      reverse = '' + reverse;
    }
    
    reverse = parseInt(reverse);
    return reverse
}
