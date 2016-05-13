var count = prompt("How many items do you want?");
if (!count || isNaN(count)){
    alert('ಠ_ಠ');
}
var issues = selectIssues(count);
var printableIssues = [];
issues.forEach(function(issue){
    var issueNameElement = issue.querySelector('.ghx-key a');
    var issueDescElement = issue.querySelector('.ghx-inner');
    printableIssues.push({
        'href': issueNameElement.href,
        'name': issueNameElement.title,
        'description': issueDescElement.innerText
    });
});
var content = document.querySelector('#content');
Array.from(content.children).forEach(function(elem){
    elem.style.display = 'none';
});
var elem = document.createElement('div');
elem.style.padding = "25px"
var list = document.createElement('ul');
elem.style.textAlign = 'center';
list.style.listStyleType = 'none';
list.style.left = '33%';
list.style.marginTop = '30px';
list.style.position = 'absolute';
console.log(printableIssues.map(function(issue){return issue.name}));
printableIssues.forEach(function(issue){
    var row = document.createElement('li');
    var issueName = document.createElement('a');
    issueName.href = issue.href;
    issueName.innerText = issue.name.split("-")[1].length > 1 ? issue.name : issue.name + '&nbsp;';
    issueName.fontWeight = 'bold';
    issueName.style.paddingRight = "5px";
    var description = document.createElement('div');
    description.style.display = "inline"
    description.innerText = issue.description;
    row.appendChild(issueName);
    row.appendChild(description);
    row.appendChild(document.createElement('br'));
    list.appendChild(row);
});
content.appendChild(list);
