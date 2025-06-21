function showMultiplesWithLabel() {
  for (let i = 50; i <= 100; i += 5) {
    let label = ""
    if (i <= 60) {
      label = "LESS"
    } else if (i <= 70) {
      label = "ENOUGH"
    } else if (i <= 80) {
      label = "GOOD"
    } else {
      label = "EXCELLENT"
    }
    console.log(`${i} - ${label}`)
  }
}

showMultiplesWithLabel()