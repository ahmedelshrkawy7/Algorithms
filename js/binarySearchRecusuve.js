function binarySearch(arr , target,l=0,r=arr.length){
    
    let middle = Math.floor((l+r)/2)

    if(arr[middle] == target) return middle
    if(target > arr[middle]){
        return binarySearch(arr,target,middle+1,r)
    }
    else if(target < arr[middle]){
       return binarySearch(arr,target,l,middle-1)
    }

    return -1




}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,11],8))