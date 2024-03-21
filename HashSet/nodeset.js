export function NodeSet(k = null, n = null) {
    const key = k
    let next = n

    function getNext() {
        return next
    }
    function addNext(input) {
        next = input
    }
    return {key, getNext, addNext}
}