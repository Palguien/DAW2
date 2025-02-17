const res = await fetch("http://localhost:3000/object", {
	method: "POST",
	headers: {
			"Content-Type": "application/json",
			//"Autorization": `Bearer ${token}`
		},
	body: JSON.stringify({
        "username":"admin",
        "password":"adminpassword"
    })
})

const {token} = await res.json();
console.log(token);