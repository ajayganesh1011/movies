        function search(){
            movieName = document.getElementById("movie").value;
            url = `http://www.omdbapi.com/?apikey=fa1c9c03&t=${movieName}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    result = document.getElementById("result");
                    result.innerHTML = `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${data.Poster}" class="card-img-top" alt="${data.Title}">
                <div class="card-body">
                    <h5 class="card-title">${data.Title}</h5>
                    <p class="card-text">$${data.Year}</p>
                    <p class="card-text">$${data.Director}</p>
                    <p class="card-text">$${data.Plot}</p>
                </div>
            </div>
        </div>
        `
                })
        }
