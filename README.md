Debouncing : 

Typing slow = 200ms
Typing fast = 30ms

Performance :
- iphone pro max = 14 letter * 1000 = 14000
- with debouncing = 3 Api calles * 1000 = 3000

Debouncing with 200ms
- if differnce between 2 key strokes is < 200ms - Decline Api call
> 200ms make an API call


Cache : 
time complexity to search in array = O(n)
time complexity to search in object = O(1) 