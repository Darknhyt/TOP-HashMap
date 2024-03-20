export function NodeMap(k = null, v = null, n = null) {
    const key = k
    let value = v
    let next = n

    function getNext() {
        return next
    }
    function addNext(input) {
        next = input
    }
    return {key, value, getNext, addNext}
}