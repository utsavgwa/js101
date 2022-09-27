function formatStr(str){
    // we are slicing and only converting prefix to uppercase
    {
        let prefix, rest;
        prefix=str.slice(0,3);
        rest=str.slice(3);
        str = prefix.toUpperCase()+rest;
    }
    //this if is for checking 'foo' is present in str or not
    if (/^FOO:/.test(str)){
        return str;
    }
    return str.slice(4);
}
console.log(formatStr("foo:barista"));