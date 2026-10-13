import unicodedata

a = "Café"                          # é as one code point
b = "Café"                    # e + combining accent
print(a, b, a == b)
print(len(a), len(b))            # code points, not glyphs
print([hex(ord(c)) for c in b[-2:]])

na = unicodedata.normalize("NFC", a)
nb = unicodedata.normalize("NFC", b)
print("after NFC:", na == nb, len(nb))
print(len(a.encode("utf-8")), "bytes in UTF-8")
print("Depot".lower() == "DEPOT".lower(),
      "straße".casefold() == "STRASSE".casefold())
