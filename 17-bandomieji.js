function positiveSum(arr) {
    let sum = 0;
      console.log(arr)
      for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item > 0) {
            sum += item;
        }
     
    }
     