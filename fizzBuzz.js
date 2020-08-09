for(i = 1; i < 101; i++){

    x = "Fizz"
    y = "Buzz"

    console.log((i % 15 == 0) ? x + y
    : (i % 5 == 0) ? y
    : (i % 3 == 0) ? x
    : i)

}