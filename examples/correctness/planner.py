from dataclasses import dataclass


@dataclass
class Parcel:
    pid: str        # parcel identifier, e.g. "P-317"
    depot: str      # depot that currently holds it
    weight: int     # grams, so sums stay exact


PARCELS = [
    Parcel("P-104", "North", 2500),
    Parcel("P-221", "East", 800),
    Parcel("P-317", "North", 5000),
    Parcel("P-458", "West", 1200),
]
