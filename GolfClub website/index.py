n = 17
sieve = set(range(2,n+1))
while sieve:
    small = min(sieve)
    print(small,end=",")
    sieve = sieve - set(range(small,n+1,small))