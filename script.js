function is_palin(n){
	let num = n, sum = 0;
	while(num!==0){
		sum = (sum*10)+num%10;
		num = Math.floor(num/10);
	}
	return sum === n;
}

function nextPalindrome(num) {
	for(let i=num;;i++){
		if(is_palin(i)){
			return i;
		}
	}
}

const input = prompt("Enter a palindrome number")
alert(nextPalindrome(input));
