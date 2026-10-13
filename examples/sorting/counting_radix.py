def counting_sort(items, key, k):
    """Stable sort for integer keys in range(k)."""
    count = [0] * k
    for x in items:
        count[key(x)] += 1
    start, total = [0] * k, 0
    for v in range(k):             # first slot for key v
        start[v], total = total, total + count[v]
    out = [None] * len(items)
    for x in items:                    # input order: stable
        out[start[key(x)]] = x
        start[key(x)] += 1
    return out


def radix_sort(nums, digits):
    for d in range(digits):        # least significant first
        digit = lambda x: x // 10**d % 10
        nums = counting_sort(nums, digit, 10)
        print(f"after digit {d}: {nums}")
    return nums


radix_sort([458, 104, 317, 221, 512, 600, 109], 3)
