/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let pathItems = path.split("/").filter(item => item.length > 0);
    let stack = [];
    for (let item of pathItems) {
        if (/([a-z]|[A-Z]|[0-9])+/.test(item) || item === "...") {
            stack.push(item);
        } else if (item === "..") {
            if (stack.length > 0) {
                stack.pop();
            }
        }
        // console.log(stack);
    }
    if (stack.length === 0) {
        return "/"
    }
    stack.unshift("")
    return stack.join("/")
};