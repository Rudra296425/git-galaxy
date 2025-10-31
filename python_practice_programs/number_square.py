# Print numbers 1..x² (squares ≤ limit)
def squares_upto(x: int):
    i = 1
    while i*i <= x:
        print(i*i, end=" ")
        i += 1
    print()
