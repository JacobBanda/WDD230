function incrementVisitCount() {

    if (typeof(Storage) !== "undefined") {

        let visitCount = localStorage.getItem("visitCount");

        if (visitCount === null) {
            visitCount = 1;
            } else {
                visitCount = parseInt(visitCount) + 1;
            }

        localStorage.setItem("visitCount", visitCount);

        document.getElementById("visitCount").textContent = visitCount;
    } else {

        document.getElementById("visitCount").textContent = "LocalStorage is not supported in this browser.";
    }
    }

incrementVisitCount();