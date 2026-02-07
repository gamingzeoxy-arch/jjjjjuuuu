fetch("/api/search")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert(data.message);
  })
  .catch(err => {
    alert("API not working");
  });
