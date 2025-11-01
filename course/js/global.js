const version = "0";

if (localStorage.version !== version) {
    console.log("out of date: replacing localStorage with default");
    localStorage.clear();
    localStorage.version = version;
    localStorage.courses = JSON.stringify({});
    localStorage.spareRestrictions = JSON.stringify(Array(9).fill(true));
    localStorage.replacing = JSON.stringify(null);
    location.href = "index.html";
}
