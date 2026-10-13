class Trie:
    def __init__(self):
        self.root = {}

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})  # one per char
        node["$"] = True                     # end of a word

    def starts_with(self, prefix):
        node = self.root
        for ch in prefix:               # walk the prefix
            if ch not in node:
                return []
            node = node[ch]
        out, stack = [], [(node, prefix)]
        while stack:                         # collect below
            node, word = stack.pop()
            if "$" in node:
                out.append(word)
            for ch, child in node.items():
                if ch != "$":
                    stack.append((child, word + ch))
        return sorted(out)
