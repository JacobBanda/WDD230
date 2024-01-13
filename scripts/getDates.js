function lastUpdated() {
    YearElement.textContent = ` ${currentYear} Your Website`;
    document.getElementById("currentyear").innerHTML = YearElement;
   
    let a = document.lastModified;
    document.getElementById("lastmodified").innerHTML = a;
}
