# Print n copies of a string (no spaces)
s, n = "hello", 4
print(s * n)


# Reverse a string without slicing / built-ins
def reverse_manual(s: str) -> str:
    out = ""
    for ch in s:
        out = ch + out
    return out


# Check if palindrome (case-insensitive)
def is_palindrome(s: str) -> bool:
    s = s.lower()
    t = ""
    for ch in s:
        t = ch + t
    return s == t


# Index of substring (manual, no find)
def find_pattern(s: str, p: str) -> int:
    n, m = len(s), len(p)
    for i in range(n - m + 1):
        ok = True
        for j in range(m):
            if s[i + j] != p[j]:
                ok = False
                break
        if ok:
            return i
    return -1


# ---- Test Calls ----
print(reverse_manual("Ashish"))       # => hsihsA
print(is_palindrome("TenEt"))         # => True
print(find_pattern("Hello", "llo"))   # => 2
