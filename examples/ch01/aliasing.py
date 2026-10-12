from planner import Parcel

today = [Parcel("P-104", "North", 2500)]
route = today                  # a second name, same list

route.append(Parcel("P-221", "East", 800))
print(len(today), route is today)

today[0].depot = "South"       # mutate the shared parcel
print(route[0].depot)
