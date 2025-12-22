function coinChange(coins, amount){
    // arr of length amount + 1    
    // we are using Infinity because we are going to use Math.min -> to find the correct minimum numbers of coins, when we compare the number in first iteration with Infinity we make sure that our result is 100% correct
    // 
    const dp = Array(amount + 1).fill(Infinity)

    // this fact is the starting point for  all out calculation 
    dp[0] = 0

    
    //iterate from 1 to target, because for 0 we already know the answer
    for (let i = 1;i <= amount;i++){

        for (const coin of coins){
            // avoiding negative index and skiping -+9630521801478020369
            if(i >= coin){
                //At any current amount i, "What is the fewest number of coins I need to reach this amount i"
                // dp[i] // best previouw way 
                // d[i - coin] -> the new way ->  
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }


}


coinChange([1,2,5], 10)