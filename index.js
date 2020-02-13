const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let win = array.find( s => s.result === "W")
  return !!win ? win.year : undefined
}