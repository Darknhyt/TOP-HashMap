import { LinkedSetList } from "./HashSet/linked-setlist.js";
export function HashSet() {
  const loadFactor = 0.8
  let capacity = 16
  let bucket = []
  let len = 0
  let load = 0
  let maxLoad = capacity * loadFactor
  const getBucket = (k) => { return bucket[hash(k)] }
  clear()

  function hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }
  function set(key) {
    let current = getBucket(key)
    if (!current.containKey(key)) {
      current.append(key)
      len++
      if (current.size == 1) {
        load++
        checkLoad()
      }
    }
  }
  function get(key) {
    return getBucket(key).getByKey(key)
  }
  function has(key) {
    return getBucket(key).containKey(key)
  }
  function remove(key) {
    if (getBucket(key).remove(key)) {
      len--
      return true
    } else {
      return false
    }
  }
  function length() {
    return len
  }
  function clear() {
    for (let i = 0; i < capacity; i++) {
      bucket[i] = new LinkedSetList()
    }
    len = 0
  }
  function keys() {
    let res = []
    bucket.forEach((b) => { res.push(...b.getKeys()) })
    return res
  }
  function checkLoad() {
    if (load > maxLoad) {
      capacity = capacity * 2
      maxLoad = capacity * loadFactor
      let newBucket = new Array(capacity)
      for (let i = 0; i < capacity; i++) {
        newBucket[i] = new LinkedSetList()
      }
      keys().forEach((e) => {
        if (e.length > 0) { newBucket[hash(e)].append(e) }
      })
      bucket = newBucket
    }
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys
  }
}