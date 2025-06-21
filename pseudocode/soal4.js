function numberToWords(x) {
  const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
  let result = ""

  let thousands = Math.floor(x / 1000)
  let hundreds = Math.floor((x % 1000) / 100)
  let tens = Math.floor((x % 100) / 10)
  let ones = x % 10

  if (thousands > 0) {
    if (thousands === 1) {
      result += "One Thousand "
    } else {
      result += units[thousands] + " Thousand "
    }
  }

  if (hundreds > 0) {
    if (hundreds === 1) {
      result += "One Hundred "
    } else {
      result += units[hundreds] + " Hundred "
    }
  }

  if (tens > 0) {
    if (tens === 1) {
      if (ones === 0) {
        result += "Ten "
      } else if (ones === 1) {
        result += "Eleven "
        ones = 0
      } else if (ones === 2) {
        result += "Twelve "
        ones = 0
      } else if (ones === 3) {
        result += "Thirteen "
        ones = 0
      } else if (ones === 5) {
        result += "Fifteen "
        ones = 0
      } else {
        result += units[ones] + "teen "
        ones = 0
      }
    } else {
      const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
      result += tensWords[tens] + " "
    }
  }

  if (ones > 0) {
    result += units[ones]
  }

  return result.trim()
}

// Example:
console.log(numberToWords(2234)) 
console.log(numberToWords(8500)) 
console.log(numberToWords(7001)) 
