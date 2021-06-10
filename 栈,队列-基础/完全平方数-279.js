/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    // 使用类似于BFS算法的解法
    let minTotal;
    let queue = [];
    // 压入队列的二元组中，第一个元素表示减去若干平方数以后的差，初始值为n，第二个元素表示已经从n中减去的平方数的个数，初始值为0
    queue.push([n, 0]);
    // visited集合用于记录哪些元素已经被访问过，如果被访问则不继续处理。因为它已经减去的平方数个数要比第一次访问的那个元素的已减去平方数个数大，要么等于，由于只是统计最少数量，所以通过visited可以减少很多不必要的计算量
    let visited = new Set();
    loop:
        while (queue.length > 0) {
        let [num, count] = queue.shift();
        for (let i = 1; num-i*i>=0 ;i++) {
            let nextNum = num-i*i;
            let nextCount = count+1;
            if (nextNum === 0) {
                // 因为求最少数量，第一次发现的符合要求的数即是结果
                minTotal =nextCount;
                break loop;
            }
            if (!visited.has(nextNum)) {
                queue.push([nextNum, nextCount])
                visited.add(nextNum);
            }
        }
        }
    return minTotal;
};