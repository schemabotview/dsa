from kmp import prefix_function, kmp_find

pat = "ABABAC"
print("pattern:", " ".join(pat))
print("pi:     ", " ".join(map(str, prefix_function(pat))))
print(kmp_find("ABABABACABA", pat))
print(kmp_find("ABABABA", "ABA")[0])
text, p = "A" * 1000, "A" * 99 + "B"
print("naive's worst case:", kmp_find(text, p)[1], "steps")
