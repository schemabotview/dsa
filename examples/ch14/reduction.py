from itertools import combinations


def subset_sum(nums, target):        # the known problem
    return any(sum(c) == target
               for k in range(len(nums) + 1)
               for c in combinations(nums, k))


def partition(nums):                 # two equal halves?
    total = sum(nums)
    return total % 2 == 0 and subset_sum(nums, total // 2)


def via_partition(nums, t):          # THE REDUCTION
    """Turn a subset-sum instance into a partition one:
    add two numbers so an even split exists exactly
    when some subset of nums sums to t."""
    s = sum(nums)
    return partition(nums + [s + t, 2 * s - t])


nums = [3, 7, 1, 8, 4]
print("target  direct  via partition")
for t in [9, 10, 30]:
    print(f"{t:6}  {subset_sum(nums, t)!s:6}"
          f"  {via_partition(nums, t)}")
