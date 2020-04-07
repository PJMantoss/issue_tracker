function fetchIssues(){
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (let i=0; i<issues.length; i++){
        let id = issues[i].id;
        let desc = issues[i].description;
        let
    }
}