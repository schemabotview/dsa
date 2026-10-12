def h(key, m):
    """Polynomial string hash, as a bucket in range(m)."""
    value = 0
    for ch in key:
        value = (value * 31 + ord(ch)) % 2**32
    return value % m


if __name__ == "__main__":
    pids = ["P-104", "P-221", "P-317", "P-458", "P-512",
            "P-600"]
    print("m = 8: ", [h(p, 8) for p in pids])
    print("m = 16:", [h(p, 16) for p in pids])

    direct = [None] * 1000          # direct addressing:
    direct[104] = "North"           # number = slot, no hash
    print(direct[104], len(direct))
