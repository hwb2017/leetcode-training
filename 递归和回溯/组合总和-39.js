var combinationSum = function(candidates, target) {
    const ans = [];
    const dfs = (target, combine, idx) => {
        // 递归中不断迭代的变量就是idx和target，所以target为0或者dix等于数组长度时就是递归终止条件
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // if (target < 0) {
        //     return
        // }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数，根据大小进行剪枝，如果不剪就要在递归终止条件中增加一个小于零的判断
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }

    dfs(target, [], 0);
    return ans;
};