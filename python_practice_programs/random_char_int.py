import random

# Take runtime input
a = int(input("Enter number of random characters: "))
b = int(input("Enter number of random digits: "))

# alphabets and digits manually defined
alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
digits = "0123456789"

# Print random characters
if a > 0:
    chars = ""
    for i in range(a):
        chars += random.choice(alphabets)
    print(chars)

# Print random digits
if b > 0:
    nums = ""
    for i in range(b):
        nums += random.choice(digits)
    print(nums)