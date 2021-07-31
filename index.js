function superbowlWin(array) {
    let victory = array.find((e) => e.result === "W")
    if(victory) {
        return victory.year
    } else
    return victory
}