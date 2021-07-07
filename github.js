// Client ID and Secret & repos count and sort
const client_id = 'df36bb4c8a6286df33cb',
      client_secret = 'f2df0dd5ed8a0a6e5a0ccfd702c202d5de9aeaf3',
      repos_count = 5,
      repos_sort = 'created asc';

// API Call to get info
const fetchUser = async(user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id${client_id}&client_secret${client_secret}`);

  const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${repos_count}&sort=${repos_sort}&client_id=${client_id}&client_secret=${client_secret}`);

  const profile = await api_call.json();
  const repos = await reposResponse.json();

  return {
    profile, 
    repos
  }
}




