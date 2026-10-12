grams = [2500, 800, 5000, 1200]
print(sum(grams) / 1000)        # exact ints, divide once

total = 0.0
for kg in [0.1] * 10:           # ten 100 g parcels
    total += kg                 # each += rounds
print(total, total == 1.0)
print(sum([0.1] * 10))          # 3.12+: compensated sum

print(7 // 2, -7 // 2)          # floor, not truncation

big = 2 ** 200                  # ints grow, so does cost
print(len(str(big)), big.bit_length())
