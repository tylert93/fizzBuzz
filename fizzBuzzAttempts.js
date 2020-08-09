// Attempt 1, 159 characters
for(i = 1; i < 101; i++){

    if(i%15==0){
        j = "FizzBuzz"
    }else if(i % 5 == 0){
        j = "Buzz"
    }else if(i % 3 == 0){
        j = "Fizz"
    }else{
        j = i
    }

    document.querySelector("body").innerHTML += "<p>" + j + "</p>";

}

// Attempt 2, 87 characters
for(i = 1; i < 101; i++){

    console.log((i % 15 == 0) ? "FizzBuzz"
    : (i % 5 == 0) ? "Buzz" 
    : (i % 3 == 0) ? "Fizz"
    : i)

}

// Attempt 3, 86 characters

for(i = 1; i < 101; i++){

    x = "Fizz"
    y = "Buzz"

    console.log((i % 15 == 0) ? x + y
    : (i % 5 == 0) ? y
    : (i % 3 == 0) ? x
    : i)

}