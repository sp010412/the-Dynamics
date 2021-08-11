
function theList() {
  let passedValue = undefined
  var areaList = [{
    Area: "Gugulethu",
    
    Level_1: 500,
    Level_2: 400,
    Level_3: 300,
    Level_4: 250,
    Level_5: 100,

    levelData : function() {
      return [this.Level_1, this.Level_2, this.Level_3, this.Level_4, this.Level_5] 
    },

    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
      'rgb(255,0,0)',
    ]
  },
  {
    Area: "Langa",
    Level_1: 400,
    Level_2: 350,
    Level_3: 288,
    Level_4: 170,
    Level_5: 93,
    levelData : function() {
      return [this.Level_1, this.Level_2, this.Level_3, this.Level_4, this.Level_5] 
    },
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(0,0,128)',
      'rgb(0,0,128)',
      'rgb(0,0,128)',
      'rgb(0,0,128)',
      'rgb(0,0,128)',
    ]
  },
  {
    Area: "Khayelitsha",
    Level_1: 507,
    Level_2: 407,
    Level_3: 235,
    Level_4: 110,
    Level_5: 60,
    levelData : function() {
      return [this.Level_1, this.Level_2, this.Level_3, this.Level_4, this.Level_5] 
    },
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgb(204,85,0)',
      'rgb(204,85,0)',
      'rgb(204,85,0)',
      'rgb(204,85,0)',
      'rgb(204,85,0)',
    ]
  }
  ];
  function list() {
    return areaList;
  }
  function filterGraph() {
    const arrayData = []
    if (passedValue == undefined) {
      const onData = areaList.filter(data => {
        arrayData.push({
          label: data.Area,
          data: data.levelData(), //[data.Level_1, data.Level_2, data.Level_3, data.Level_4, data.Level_5],
          backgroundColor: data.backgroundColor,
          borderColor: data.borderColor,
          borderWidth: 1
        })
        return true;
      })
      return arrayData;
    } else {
      const onData = areaList.filter(data => {
        if (data.Area.includes(passedValue)) {
          arrayData.push({
            label: data.Area,
            data: data.levelData(), // [data.Level_1, data.Level_2, data.Level_3, data.Level_4, data.Level_5],
            backgroundColor: data.backgroundColor,
            borderColor: data.borderColor,
            borderWidth: 1
          })
        }
        return true;
      })
      return arrayData;
    }
  }
  function setPassedValue(name) {
    passedValue = name.toUpperCase()
  }
  function getPas() {
    return passedValue
  }
  function updateAccidentLevel(area, level, qty) {
    console.log(arguments);
    const theArea = areaList.find(function(currentArea) {
      return currentArea.Area === area;
    });
    if (theArea) {
      theArea[level] += Number(qty);
    }
  }
  return {
    list,
    getPas,
    filterGraph,
    setPassedValue,
    updateAccidentLevel
  }
}
// function theList(){
// var areaList = [ {
//     "Area": "Gugulethu",
//     "Level-1": "500",
//     "Level-2": "400",
//     "Level-3": "300",
//     "Level-4": "700",
//     "Level-5": "250",
//   },
//   {
//     "Area": "Langa",
//     "Level-1": "250",
//     "Level-2": "400",
//     "Level-3": "300",
//     "Level-4": "700",
//     "Level-5": "250",
//   },
//   {
//     "Area": "Khayelitsha",
//     "Level-1": "500",
//     "Level-2": "400",
//     "Level-3": "300",
//     "Level-4": "700",
//     "Level-5": "250",
//   }
//   ];
//   function list(){
//       return areaList;
//   }
//   var eachList = [ {
//     Area: "Gugulethu",
//     Level1: "500",
//     Level2: "400",
//     Level3: "300",
//     Level4: "700",
//     Level5: "250",
//   },
//   {
//     Area: "Langa",
//     Level1: "250",
//     Level2: "400",
//     Level3: "300",
//     Level4: "700",
//     Level5: "250",
//   },
//   {
//     Area: "Khayelitsha",
//     Level1: "500",
//     Level2: "400",
//     Level3: "300",
//     Level4: "700",
//     Level5: "250",
//   }
//   ];
//   function byarea(){
//     return eachList;
// }
//   return{
//       list,
//       byarea,
//   }
// }