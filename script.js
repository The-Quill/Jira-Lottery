var selectIssues = function(length){
    var randomIssues = new Set();
    var elements = Array.from(document.getElementsByClassName('js-issue'));
    elements.forEach(function(issue, index){
        if (issue.classList.contains('ghx-done')){
            elements.splice(index, 1);
        }
    });
    for (var i = 0; i < length; i++){
        randomIssues.add(elements[Math.floor(Math.random() * elements.length)]);
    }
    return Array.from(randomIssues);
}
