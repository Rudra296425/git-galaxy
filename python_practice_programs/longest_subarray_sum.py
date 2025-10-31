# Longest subarray with sum = k (handles negatives)
def longest_subarray_sum_k(arr, k):
    prefix = 0
    first = {}
    best = 0
    for i, x in enumerate(arr):
        prefix += x
        if prefix == k:
            best = max(best, i + 1)
        need = prefix - k
        if need in first:
            best = max(best, i - first[need])
        if prefix not in first:
            first[prefix] = i
    return best
