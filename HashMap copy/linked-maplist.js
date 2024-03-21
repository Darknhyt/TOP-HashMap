import { NodeMap } from "./nodemap.js"
export function LinkedMapList(h = null) {
    let head = h
    let tail = null
    let size = 0
    const isEmpty = () => { return head == null }

    function append(key, value) {
        const newNode = new NodeMap(key, value)
        if (head == null) {
            head = newNode
        } else {
            if (tail == null) {
                tail = newNode
                head.addNext(tail)
            } else {
                tail.addNext(newNode)
                tail = newNode
            }
        }
        size++
    }
    function containKey(key) {
        let cont = 0
        let actual = head
        while (cont < size) {
            if (key == actual.key) {
                return true
            } else {
                actual = actual.getNext()
                cont++
            }
        }
        return false
    }

    function indexByKey(key) {
        let cont = 0
        let actual = head
        while (cont < size) {
            if (key == actual.key) {
                return cont
            } else {
                actual = actual.getNext()
                cont++
            }
        }
        return null
    }
    function getByKey(key) {
        let cont = 0
        let actual = head
        while (cont < size) {
            if (key == actual.key) {
                return actual.value
            } else {
                actual = actual.getNext()
                cont++
            }
        }
        return null
    }
    function edit(key, value) {
        let cont = 0
        let actual = head
        while (cont < size) {
            if (key == actual.key) {
                actual.value = value
                break
            } else {
                actual = actual.getNext()
                cont++
            }
        }
    }
    function toString() {
        let cont = 0
        let actual = head
        let res = ""
        while (cont < size) {
            res += `(${actual.value}) → `
            actual = actual.getNext()
            cont++

        }
        res += "null"
        return res
    }
    function getKeys() {
        let cont = 0
        let actual = head
        let res = []
        while (cont < size) {
            res.push(actual.key)
            actual = actual.getNext()
            cont++
        }
        return res
    }
    function getValues() {
        let cont = 0
        let actual = head
        let res = []
        while (cont < size) {
            res.push(actual.value)
            actual = actual.getNext()
            cont++
        }
        return res
    }
    function getEntries() {
        let cont = 0
        let actual = head
        let res = []
        while (cont < size) {
            res.push([actual.key, actual.value])
            actual = actual.getNext()
            cont++
        }
        return res
    }
    function removeAt(index) {
        if (index == 0) {
            head = head.getNext()
            size--
            return true
        } else if (0 < index && index < size) {
            let cont = 0
            let actual = head
            while (cont < index - 1) {
                actual = actual.getNext()
                cont++
            }
            actual.addNext(actual.getNext().getNext())
            size--
            return true
        } else {
            return false
        }
    }
    function remove(key) {
        return removeAt(indexByKey(key))
    }
    return {
        append,
        containKey,
        getByKey,
        toString,
        remove,
        edit,
        getKeys,
        getValues,
        getEntries,
        isEmpty
    }
}
