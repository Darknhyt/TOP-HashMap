import { LinkedMapList } from "./HashMap/linked-maplist.js";
export function HashMap() {
  const loadFactor = 0.8
  let capacity =  16
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
  function set(key, value) {
    let current = getBucket(key)
    if(current.isEmpty()){
      current.append(key, value)
      len++
      load++
      comprobateLoadFactor()
    } else if (current.containKey(key)) {
      current.edit(key, value)
    } else {
      current.append(key, value)
      len++
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
      bucket[i] = new LinkedMapList()
    }
    len = 0
  }
  function keys() {
    let res = []
    bucket.forEach((b) => { res.push(...b.getKeys()) })
    return res
  }
  function values() {
    let res = []
    bucket.forEach((b) => { res.push(...b.getValues()) })
    return res
  }
  function entries() {
    let res = []
    bucket.forEach((b) => { res.push(...b.getEntries()) })
    return res
  }
  function comprobateLoadFactor(){
    if(load > maxLoad){
      capacity = capacity * 2
      maxLoad = capacity * loadFactor
      let newBucket = new Array(capacity)
      for (let i = 0; i < capacity; i++) {
        newBucket[i] = new LinkedMapList()
      }
      entries().forEach((e)=>{
        if(e.length>1){newBucket[hash(e[0])].append(e[0],e[1])}
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
    keys,
    values,
    entries
  }
}