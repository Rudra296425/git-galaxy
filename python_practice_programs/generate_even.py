# Generator: even numbers up to n (inclusive)

def evens(n, start=0):
    """Yield even numbers from start up to n."""
    x = start if start % 2 == 0 else start + 1
    while x <= n:
        yield x
        x += 2

if __name__ == "__main__":
    n = 20
    print(f"Even numbers up to {n}:")
    for v in evens(n):
        print(v, end=" ")
    print()