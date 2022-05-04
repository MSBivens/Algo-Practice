// Receive an array scores, calculate average, return True if you scored better, False if not
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}  