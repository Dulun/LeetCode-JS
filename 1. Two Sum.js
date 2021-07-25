/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let storage = {}
    for(let [index,num] of nums.entries()) {
        if(storage[num] !== undefined) return [storage[num], index]
        storage[target-num] = index
    }
}
/**
 * storage: {target-nums[i] : index}
 * if storage[i] exist, the value of storage[i] is the previous index
 */

let k = twoSum([2,7,11,15],9)
console.log(k);
