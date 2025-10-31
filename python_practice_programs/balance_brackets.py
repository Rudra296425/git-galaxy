# Validate balanced brackets ()[]{}
def balanced(s):
    stack = []
    match = {')':'(', ']':'[', '}':'{'}
    for ch in s:
        if ch in "([{":
            stack.append(ch)
        elif ch in ")]}":
            if not stack or stack[-1] != match[ch]:
                return False
            stack.pop()
    return not stack
