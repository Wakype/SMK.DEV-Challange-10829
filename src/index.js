// gak pure sendiri, ada bantuan chatgpt
const isHappyNumber = (n) => {
  // Membuat array untuk melacak angka-angka yang sudah dihitung
  const visitedNumbers = [];

  // Fungsi untuk menghitung jumlah kuadrat digit
  const calculateSquareSum = (number) => {
    let sum = 0;

    while (number > 0) {
      const digit = number % 10;
      sum += digit * digit;
      number = Math.floor(number / 10);
    }
    return sum;
  };

  // Proses untuk menentukan apakah n adalah angka bahagia
  while (n !== 1 && visitedNumbers.indexOf(n) === -1) {
    visitedNumbers.push(n);
    n = calculateSquareSum(n);
  }

  console.log('visitedNumbers =>', visitedNumbers);
  // Mengembalikan hasil
  return n === 1;
};

// Contoh penggunaan
const inputNumber = 20;
const isHappy = isHappyNumber(inputNumber);
console.log(isHappy);