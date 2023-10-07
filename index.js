const hqLocation = 42
const blockToFeet = 264
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs(blockNumber - hqLocation)
}
console.log(distanceFromHqInBlocks(43))



function distanceFromHqInFeet(blockNumber) {
  let numberOfBlocks = distanceFromHqInBlocks(blockNumber);
  return numberOfBlocks * blockToFeet

}



function distanceTravelledInFeet(start, destination) {
  let numberOfBlocks = Math.abs(destination - start)
  return numberOfBlocks * blockToFeet

}

const freeRide = 400
const longRide = 2000
const maxRide = 2500
function calculatesFarePrice(start, destination) {
  let distanceInFeet = distanceTravelledInFeet(start, destination)
  if (distanceInFeet <= freeRide)
    return 0
  else if (distanceInFeet > maxRide)
    return "cannot travel that far"
  else if (distanceInFeet >= longRide)
    return 25
  else
    return (distanceInFeet - freeRide) * .02

}

