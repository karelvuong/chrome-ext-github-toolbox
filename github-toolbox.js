var elRepoList = document.getElementsByClassName('repo-list'),
    elRepoListItem = document.getElementsByClassName('repo-list-item');

var sortedRepos = $(elRepoListItem).sort(
  function(a, b) {
    var sa = $(a).find($('.repo-list-name'))[0].innerText,
        sb = $(b).find($('.repo-list-name'))[0].innerText;
    return sa.toLowerCase().localeCompare(sb.toLowerCase());
  }
);

elRepoList.innerHTML = '';

for (var i = 0; i < sortedRepos.length; i++) {
  $(elRepoList).append(sortedRepos[i]);
}
