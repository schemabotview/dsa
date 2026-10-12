PAIRS = {")": "(", "]": "[", "}": "{"}


def balanced(text):
    stack = []
    for pos, ch in enumerate(text):
        if ch in "([{":
            stack.append((ch, pos))           # push
        elif ch in PAIRS:
            if not stack or stack[-1][0] != PAIRS[ch]:
                return f"mismatch at {pos}"
            stack.pop()                       # match: pop
    if stack:
        return f"unclosed at {stack[-1][1]}"
    return "balanced"


for text in ["{[()()]}", "([)]", "(()", "", "a[b(c)]d"]:
    print(f"{text!r:12} {balanced(text)}")
