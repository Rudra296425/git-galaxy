# File I/O: count lines that contain a substring
def count_lines_with(path, needle):
    c = 0
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            if needle in line:
                c += 1
    return c
