# 三数之和-15
`题目描述:` 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

`题解:` 这里没有特别节省计算的办法，主要的做法就是 排序+双指针，其中双指针部分，主要就是在确定了左边的一个负数以后，在该负数右边的所有元素中，通过对撞指针的办法找到和为负数的绝对值的两个元素，构成三元组。这里要注意要判断和跳过重复元素
