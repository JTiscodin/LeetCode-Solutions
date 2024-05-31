


var merge = function(intervals) {
    console.log(intervals.sort((a, b) => a[0] - b[0]))
    let ans = intervals.map((e,i) => {
        if (intervals[i+1] && e[1] >= intervals[i+1][0]){
            console.log(e[1], intervals[i+1][0])
            let newInterval = [Math.min(e[0], intervals[i+1][0]), Math.max(intervals[i+1][1], e[1])]
            console.log(newInterval)
            intervals[i] = newInterval
            intervals[i+1] = []
            intervals = intervals.filter((each) => each.length !== 0)
            // Add this line to return intervals if the condition is not met
        }else{
            return intervals
        }
    })
    return ans
};

console.log(merge([[1,4],[0,0]]))

