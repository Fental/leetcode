/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length;

    if (len < 3) {
        return [];
    }

    nums.sort((x, y) => x - y);
    let result = [];

    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = len - 1;
        
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }

                while (l < r && nums[r] === nums[r + 1]) {
                    r++;
                }
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else {
                l++;
            }
        }
    }

    return result;
};