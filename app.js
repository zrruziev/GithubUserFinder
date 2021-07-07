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




