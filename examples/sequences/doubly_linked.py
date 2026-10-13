from dlist import DList

d = DList()
print(d.pids())
end = d.sentinel                     # insert before end
a = d.insert_before(end, "P-104")
b = d.insert_before(end, "P-221")
d.insert_before(b, "P-317")
print(d.pids())
d.remove(a)
print(d.pids())
d.remove(b)
print(d.pids())
