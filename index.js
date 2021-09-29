

const winFinder = obj => {
    return obj.result === "W"
}

const superbowlWin = array => {
    let newArray = array.find(winFinder)
    if (newArray) {
    return newArray.year
    } else {
        return undefined
    }
}



































// const findWin = (element) => { return element.result === "W" }

// const superbowlWin = (record) => {
//     let win = record.find(findWin)
//     if (win) {
//         return win.year 
//     } else {
//         return undefined
//     }

// }























// function superbowlWin(array) {
//     let win = array.find( 
//         function (par) {
//             return (par.result === "W")
//         }
//     )
//     if (win) {
//         return win.year
//     }
//     else {
//         return undefined
//     }
// }

