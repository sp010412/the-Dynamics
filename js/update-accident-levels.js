const updateLevel = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let params = {
        area: document.getElementById('title').value,
        level: document.getElementById('yr').value,
        qty: document.getElementById('num').value
    }
    mainList.updateAccidentLevel(params.area, params.level, params.qty);
    showAccidentTable(mainList.list());

    // get the newly updated data from the Factory Function
    const newAreaData = mainList.filterGraph();

    accidentGraph.data.datasets.forEach(function(areaData, index){
        
        // remove all the graphs datasets
        while(areaData.data.length > 0) {	
            areaData.data.pop();
        }

        // put the data back for each dataset
        newAreaData[index].data.forEach(function(level){
            areaData.data.push(Number(level));
        })

    });

    // ...
    accidentGraph.update();


}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', updateLevel);
});