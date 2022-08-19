const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init(){
    console.log("the init() function ran")
    d3.json(url).then((data) => {
        let selector = d3.select('#selDataset');
        selector.html("")
        // create dropdown
        for (let i=0; i<data.names.length; i++){
            let selOptions = selector.append("option")
            selOptions.property("value", data.names[i]);
            selOptions.text(`OTU ${data.names[i]}`);
        }