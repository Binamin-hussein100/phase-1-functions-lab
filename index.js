// Code your solution in this file!

function distanceFromHqInBlocks(block){
    if(block >= 42){
        return block - 42
    }
    else if(block < 42){
        return 42 - block
    }
}

function distanceFromHqInFeet(block){
    // if(block === 43){
    //     return 264
    // }
    const change = block - 42
    if (change){
        return change * 264
    }
    if (block < 42){
        const notChange = 42 * block
        return 264 * notChange
    }    
}

/* */
function distanceTravelledInFeet(p1,p2){
    if(p2 > p1){
        return (p2 - p1) * 264
    }
    if(p2 < p1){
        return (p1 - p2) * 264
    }
}

function calculatesFarePrice(hq,block){
    const variant = block - hq
    const feet = variant * 264
    if (variant === 1){
        return 0
    }
    if(feet >= 400 && feet <= (2000-400)){
        return 2
    }
    if (feet > 2000 && feet <= 2500){
        return 25
    }
    if (feet >= 2500){
        return 'cannot travel that far'
    }
}