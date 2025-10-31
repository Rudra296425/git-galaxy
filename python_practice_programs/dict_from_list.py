# Build dict from list of (name, marks) tuples
def create_dict(arr):
    d = {}
    for name, marks in arr:
        d[name] = marks
    return d

if __name__ == "__main__":
    sample = [("bob", 20), ("rob", 50), ("alice", 40)]
    print("Input pairs:", sample)
    result = create_dict(sample)
    print("Resulting dict:", result)