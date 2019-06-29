// content.js


function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], {
        type: 'text/csv;charset=utf-8;'
    });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

// Convert from "Published on MonthName Date, Year" to Date-MonthName-Year"
function sanitizeDate(dateString) {
    console.log(dateString);
    let dateParts = dateString.replace("Published on ", '').trim().split(' ');
    console.log(dateParts);
    dateParts[1] = dateParts[1].replace(',', '');
    return (dateParts[1] + '-' + dateParts[0] + '-' + dateParts[2]);
}

function doExport() {
    var headers = [];
    var tableOfThings = [];
    const fileTitle = 'thingilytics';

    const thingList = document.getElementById("thing-stats");
    const things = thingList.getElementsByTagName("li");
    for (let i = 0; i < things.length; i++) {
        let thisThing = things[i];
        let thingInfo = thisThing.getElementsByClassName("thing-info")[0];
        let thingInfoAnchor = thingInfo.getElementsByTagName("a")[0];

        let thingObj = {
            name: thingInfoAnchor.textContent.trim().replace(',', '_'),
            thingURL: thingInfoAnchor.href,
            publishedDate: sanitizeDate(thingInfo.getElementsByTagName("span")[0].textContent),
            imgURL: thisThing.getElementsByClassName("thing-image")[0].getElementsByTagName("a")[0].getElementsByTagName("img")[0].src,
            views: parseInt(thisThing.getElementsByClassName("views")[0].childNodes[0].textContent, 10),
            downloads: parseInt(thisThing.getElementsByClassName("downloads")[0].childNodes[0].textContent, 10),
            likes: parseInt(thisThing.getElementsByClassName("likes")[0].childNodes[0].textContent, 10),
            collects: parseInt(thisThing.getElementsByClassName("collects")[0].childNodes[0].textContent, 10),
            watches: parseInt(thisThing.getElementsByClassName("watches")[0].childNodes[0].textContent, 10),
            comments: parseInt(thisThing.getElementsByClassName("comments")[0].childNodes[0].textContent, 10),
            makes: parseInt(thisThing.getElementsByClassName("makes")[0].childNodes[0].textContent, 10),
            derivatives: parseInt(thisThing.getElementsByClassName("derivatives")[0].childNodes[0].textContent, 10),
        };
        tableOfThings.push(thingObj);
    }

    Object.keys(tableOfThings[0]).forEach(key => headers.push(key));
    console.log(thingList);
    exportCSVFile(headers, tableOfThings, fileTitle);
}



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            //alert("About to export");
            doExport();
        }
    }
);