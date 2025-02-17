
let token = "";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-button').addEventListener('click', addObject);
    main();
})

async function main() {
    token = await retrieveToken();
    const dbObjects = await retrieveObjects();
    dbObjects.forEach(object => {
        const { name, value } = object;
        addTableRow(name, value);
    });
}

function addTableRow(name, value) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${name}</td><td>${value}</td>`;
    document.querySelector('#tbody').appendChild(tr);
}

async function addObject(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const value = document.getElementById('value').value;

    if(!name) {
        console.log("Property name required");
        return;
    }

    const dbObject = await fetch('http://localhost:3000/object', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, value })
    }).then(res => res.json());

    document.getElementById('name').value = '';
    document.getElementById('value').value = '';

    addTableRow(dbObject.name, dbObject.value);
}

async function retrieveToken() {
    const { token } = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'admin',
            password: 'adminpassword'
        })
    }).then(res => res.json());

    console.log(token);
    return token
}

async function retrieveObjects() {
    const dbObjects = await fetch('http://localhost:3000/object', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }).then(res => res.json());

    console.log(dbObjects);
    return dbObjects;
}
