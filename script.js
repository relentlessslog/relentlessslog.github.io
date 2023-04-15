fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.hello);
    })
    .catch((error) => console.error(error));
