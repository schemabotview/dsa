def merge(left, right):
    out, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:        # <= keeps it stable
            out.append(left[i]); i += 1
        else:
            out.append(right[j]); j += 1
    return out + left[i:] + right[j:]


def merge_sort(xs, depth=0):
    if len(xs) <= 1:
        return xs
    mid = len(xs) // 2
    left = merge_sort(xs[:mid], depth + 1)
    right = merge_sort(xs[mid:], depth + 1)
    merged = merge(left, right)
    print("  " * depth + f"{left} + {right} -> {merged}")
    return merged


merge_sort([25, 8, 50, 12, 8, 3, 9, 15])   # weights, ×100 g
