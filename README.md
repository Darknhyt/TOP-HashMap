# TOP-HashMap
This is a Data Structure based in nodes linked to a main array. To access each element, a key is required with which it was created.
## Functions of HashMap
- `hash(key)` takes a key and produces a hash code with it. 
- `set(key,value)` takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.
- `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
- `has(key)` takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
- `remove(key)` takes a key as an argument. If the given key is in the hash map, if remove the entry with that key return true otherwise returns false.
- `length()` returns the number of stored keys in the hash map.
- `clear()` removes all entries in the hash map.
- `keys()` returns an array containing all the keys inside the hash map.
- `values()` returns an array containing all the values.
- `entries()` returns an array that contains each key, value pair.
## Functions of HashSet
- `set(key)` stores the key, if it is repeated it does nothing.
- `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
- `has(key)` takes a key as an argument and returns true or false based on whether or not the key is in the hash set.
- `remove(key)` takes a key as an argument. If the given key is in the hash set, if remove the entry with that key return true otherwise returns false.
- `length()` returns the number of stored keys in the hash set.
- `clear()` removes all entries in the hash set.
- `keys()` returns an array containing all the keys inside the hash set.