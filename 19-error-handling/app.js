try {
    // ReferenceError
    // undefinedFunction();

    // TypeError
    // null.call();

    // SyntaxError
    // eval('foo bar');

    // RangeError
    // const num = 10;
    // num.toFixed(-1);

    // URIError
    // decodeURI('%');

    // Throwing manual exceptions...
    const user = { id: 1, name: 'Lorem' };
    if (!user.hasOwnProperty('email')) {
        throw new TypeError("Object doesn't have valid properties.");
    }
} catch (e) {
    // Full output
    console.log(e);

    // Simple output
    console.log(e.toString());

    // Extended properties
    console.log(e.name);
    console.log(e.message);
}
