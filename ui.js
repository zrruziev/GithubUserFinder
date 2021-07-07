// Variables 
const output = document.getElementById('repos'),
      profileShowcase = document.getElementById('profile'),
      searchInput = document.getElementById('searchUser');
let profileInfo, reposInfo;

// Show Alert Message
const showAlert = (message, className) => {
  // Clear any Remaining Alerts!
  clearAlert();
  // Create Alert Message
  const div = document.createElement('div');
  div.className = className;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('#alertMessage');
  const search = document.querySelector('#profile');
  container.insertBefore(div, search);
  // Timeout after 3 sec
  setTimeout(() => {
    clearAlert();
  }, 3000);
}

// Clear Alert Message
const clearAlert = () => {
  const currentAlert = document.querySelector('.alert');
  if(currentAlert) {
    currentAlert.remove();
  }
}

// Clear Profile
const clearProfile = () => {
  profileShowcase.innerHTML = '';
  output.innerHTML = '';
}

// Show Profile Info
const showProfile = () => {
  fetchUser(searchInput.value)
    .then((res) => {
      profileInfo = res.profile;
      if(res.profile.message === 'Not Found') {
        showAlert('User not found', 'alert alert-danger');
        clearProfile();
      } else {
        profileShowcase.innerHTML = `
        <div class="card card-body mb-3 shadow">
          <div class="row">
            <div class="col-sm-3">
              <img class="img-fluid mb-2" src="${profileInfo.avatar_url}">
              <a href="${profileInfo.html_url}" target="_blank" class="btn btn-primary d-block btn-block mb-4">View Profile</a>
            </div>
            <div class="col-sm-9">
              <span class="badge badge-sm btn-primary text-white">Public Repos: ${profileInfo.public_repos}</span>
              <span class="badge badge-sm  btn-secondary text-white">Public Gists: ${profileInfo.public_gists}</span>
              <span class="badge badge-sm  btn-success text-white">Followers: ${profileInfo.followers}</span>
              <span class="badge badge-sm  btn-info text-white">Following: ${profileInfo.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${profileInfo.company}</li>
                <li class="list-group-item">Website/Blog: ${profileInfo.blog}</li>
                <li class="list-group-item">Location: ${profileInfo.location}</li>
                <li class="list-group-item">Member Since: ${profileInfo.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>`;
      }
      console.log(profileInfo);
    });
}

// Show Repos Info
const showRepos = () => {
  fetchUser(searchInput.value)
    .then((res) => {
      reposInfo = res.repos;
      let output = '';
      reposInfo.forEach(i => {
        output += `
        <div class="card card-body mb-2 shadow">
          <div class="row">
            <div class="col-md-6">
              <a href="${i.html_url}" target="_blank">${i.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-sm btn-primary">Stars: ${i.stargazers_count}</span>
            <span class="badge badge-sm btn-secondary">Watchers: ${i.watchers_count}</span>
            <span class="badge badge-sm btn-success">Forks: ${i.forms_count}</span>
            </div>
          </div>
        </div>`;
      // Output repos
      document.getElementById('repos').innerHTML = output;
      });
      console.log(reposInfo)
    });
}