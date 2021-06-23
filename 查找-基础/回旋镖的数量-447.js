/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
    let count = 0;
    for (let p of points) {
        let distMap = new Map();
        for (let p1 of points) {
            let dist = (p[0]-p1[0])**2 + (p[1]-p1[1])**2;
            if (!distMap.has(dist)) {
                distMap.set(dist, 1);
            } else {
                distMap.set(dist, distMap.get(dist)+1);
            }
        }
        [...distMap.values()].map(a => count += a*(a-1));
    }
    return count;
};