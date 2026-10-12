import heapq
from weighted import ROADS, INF, adjacency, path


def dijkstra(adj, src, log=print):
    dist = {v: INF for v in adj}
    pred = {v: None for v in adj}
    dist[src], heap, done, stale = 0, [(0, src)], set(), 0
    while heap:
        d, u = heapq.heappop(heap)
        if u in done:             # lazy: outdated entry
            stale += 1
            continue
        done.add(u)                 # d is final for u
        log(f"finalise {u:5} at {d:2}")
        for v, w in adj[u]:
            if d + w < dist[v]:
                dist[v], pred[v] = d + w, u
                heapq.heappush(heap, (dist[v], v))
    return dist, pred, stale


if __name__ == "__main__":
    adj = adjacency(ROADS)
    dist, pred, stale = dijkstra(adj, "North")
    print("North to Port:", path(pred, "Port"),
          dist["Port"])
    print("stale heap entries skipped:", stale)
