function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let initial = parseInt(startBlock)
    let final = parseInt(endBlock)
    let distance = Math.abs(final - initial)
    if ( distance > blockRange){
      return `${distance - blockRange} blocks out of range`
    } else{
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage
  }
}
