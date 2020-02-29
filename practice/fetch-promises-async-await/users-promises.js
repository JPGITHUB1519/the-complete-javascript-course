function getUser(name) {
  fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(json => console.log(json));
}

async function getUserAsync(name) {
  try {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let data = await response.json();
    return data;
  } catch(error) {
    console.error(erro);
  }

}

getUser('jpgithub1519');


getUser('jpgithub1519')
  .then(data => console.log(data));