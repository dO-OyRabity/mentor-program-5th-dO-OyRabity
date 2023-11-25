//走迷宮(可能有BUG)

function solve(lines) {
  let h = Number(lines[0][0])
  let w = Number(lines[0][2])
  // console.log(h)
  // console.log(w)
  let down = 1
  let go_right = 0
  let step = 0
  while (down != h || go_right != w - 1) {
    // console.log('loop')
    // console.log('down', down)
    // console.log('go_right', go_right)
    // console.log('current step', step)

    if (down !== h && lines[down + 1][go_right] === '.') {
      down += 1
      step += 1
      // console.log('to down')
    } else {
      if (go_right != w - 1) {
        go_right += 1
        step += 1
      }
      // while (go_right < w) {
      // if (lines[down][go_right] === '.') {
      // step += 1
      // console.log('to right')
      // break
      // }
      // }
    }
  }
  console.log(step)
}
