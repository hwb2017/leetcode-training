/**
 * @param {number[][]} points
 * @return {number}
 */
 var maxPoints = function(points) {
    let maxPoints = 0;
    for (let p0 of points) {
        let slopMap = new Map();
        for (let p1 of points) {
            let slop;
            if (p0[1] === p1[1] && p0[0] === p1[0]) {
                continue;
            } else if (p0[0] === p1[0]) {
                slop = Infinity;
            } else {
                slop = (p1[1]-p0[1])/(p1[0]-p0[0]);
            }
            if(!slopMap.has(slop)) {
                slopMap.set(slop, 1);
            } else {
                slopMap.set(slop, slopMap.get(slop)+1);
            }
        }
        maxPoints = Math.max(maxPoints, Math.max(...slopMap.values()));
    }
    return maxPoints+1;
};