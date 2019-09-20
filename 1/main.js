let number;
let fizzBuzz;

for (number = 1; number <= 100; number ++){
	if (number % 3 == 0 && number % 5 == 0) {
    	fizzBuzz = 'FizzBuzz';
	console.log (fizzBuzz);
	}
	else if (number % 3 == 0){
    	fizzBuzz = 'Fizz';
	console.log (fizzBuzz);
	}  
	else if (number % 5 == 0){
    	fizzBuzz = 'Buzz';
	console.log (fizzBuzz);
	}
	else {
    	fizzBuzz = number;
	console.log (fizzBuzz);
	}
}
