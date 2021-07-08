// Variables
searchBtn = document.getElementById('searchBtn');

// Listen to event
searchBtn.addEventListener('click', function() {
  if(searchInput.value !== ''){
      showProfile();
      setTimeout(() => {
        showRepos();
      }, 600);
  }
  else {
    showAlert('Enter a username', 'alert alert-danger');
        clearProfile();
  }
});



searchInput.addEventListener('keyup', (e) => {
  if(e.keyCode === 13 || e.key === "Enter") {
    e.preventDefault();
    if(searchInput.value !== ''){
      showProfile();
      setTimeout(() => {
        showRepos();
      }, 600);
  }
  else {
    showAlert('Enter a username', 'alert alert-danger');
        clearProfile();
  }
  }

});
