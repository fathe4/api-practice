const usersData = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => showUsers(data))
}

const showUsers = data => {
    console.log(data);
    const usersId = document.getElementById('users')
    const buddies = data.results
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} and email address is ${buddy.email} and your buddy gender is ${buddy.gender}`
        usersId.appendChild(p)
    }
}
usersData()