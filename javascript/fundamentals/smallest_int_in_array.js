// Find the smallest integer in an array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        const arr = args
        const min = Math.min(...arr)
        return min
    }
}