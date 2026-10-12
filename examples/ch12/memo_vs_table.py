from functools import cache
from slots import SLOTS, prepare

s, p = prepare(SLOTS)


@cache
def opt(i):                          # top-down: memoised
    if i == 0:
        return 0
    v = s[i - 1][2]
    return max(opt(i - 1), v + opt(p[i - 1]))


def opt_table(n):                    # bottom-up: tabulated
    table = [0] * (n + 1)
    for i in range(1, n + 1):      # p(i) < i: already done
        v = s[i - 1][2]
        table[i] = max(table[i - 1], v + table[p[i - 1]])
    return table


if __name__ == "__main__":
    print("memo:  ", opt(len(s)))
    print("table: ", opt_table(len(s)))
