// Your code goes here

document.querySelector('.btn').addEventListener('click', findUserName);


function findUserName(element) {
    let input = document.querySelector('.input').value;

    function getInfo (user) {

        document.querySelector('.user-img').src = user.avatar_url;
        document.querySelector('.user-name').innerText = `Name: ${user.name}`;
        document.querySelector('.user-id').innerText = `Id: ${user.id}`;
        document.querySelector('.user-bio').innerText = `Bio: ${user.bio}`; 

    }

    let xhr = new XMLHttpRequest();

    xhr.open('GET',`https://api.github.com/users/${input}`, true);
    xhr.onload = function() {

        if (this.status === 200) {
            console.log( JSON.parse(xhr.response) );
            const response= JSON.parse(this.response);
            getInfo(response);
        }
    }

    xhr.send();
    element.preventDefault();
}