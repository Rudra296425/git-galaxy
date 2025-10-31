# Frequency map & most frequent element (mode)
def mode(arr):
    freq = {}
    best_v, best_c = None, 0
    for x in arr:
        # manual update instead of freq.get(...)
        if x in freq:
            freq[x] += 1
        else:
            freq[x] = 1
        if freq[x] > best_c:
            best_v, best_c = x, freq[x]
    return best_v, best_c

if __name__ == "__main__":
    data = [2, 3, 2, 5, 3, 3]
    v, c = mode(data)
    print(f"best value: {v}")
    print(f"best count: {c}")