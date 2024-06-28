function activityTable(day) {
    // Your code here
    let logFileList;
     textFile("camera_logs.txt")
    .then((res)=>{
      logFileList = res;
    })
    
  }
  
  activityTable(6)
    .then(table => console.log(activityGraph(table)));