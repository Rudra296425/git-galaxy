# Count words (split on whitespace) without split
def count_words(s):
    in_word = False
    count = 0
    for ch in s:
        if ch.isspace():
            in_word = False
        else:
            if not in_word:
                count += 1
                in_word = True
    return count
