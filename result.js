var form = document.getElementById("myForm")

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((dados) => {
            let divTela = document.getElementById('tela')
            let texto = '';
            let data1 = new Date(dados.created_at);

            texto = texto + `<div id="tela">
            <div id="tela1">
                <br>
                <h1 id="login">${dados.login}</h1>
                <br>
                <div class="card mb-3" style="max-width: 1000px;">
                <div class="row g-0">
                <div class="col-md-4">
                <a href="${dados.avatar_url}" target="_blank"><img id="foto" src="${dados.avatar_url}"
                    class="img-fluid rounded-start" alt="..."></a>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title" id="nome"><a id="linkNome" href=${dados.html_url} target="_blank"><b>${dados.name}</b></a></h5>
                <p id="bio" class="card-text"><b>Bio: </b>${dados.bio}</p>
                <p class="card-text"><small class="text-muted"></small></p>
                <p id="local" class="card-text"><b>Local: </b>${dados.location}</p>
                <p class="card-text"><small class="text-muted"></small></p>
                <p id="criado" class="card-text"><b>Criado em: </b>${data1.toLocaleDateString()}</p>
                <p class="card-text"><small class="text-muted"></small></p>
                <p id="criado" class="card-text"><b>Tipo: </b>${dados.type}</p>
                <p class="card-text"><small class="text-muted"></small></p>
                </div>
                </div>
                </div>
                </div>
                <div id="liCards" class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href=https://github.com/${dados.login}?tab=repositories target="_blank"><b>Repositórios: </b></a><span
                            class="badge badge-success">${dados.public_repos}</span></li>
                    <li class="list-group-item"><a href=https://github.com/${dados.login}?tab=followers target="_blank"><b>Seguidores: </b></a><span
                            class="badge badge-primary">${dados.followers}</span></li>
                    <li class="list-group-item"><a href=https://github.com/${dados.login}?tab=following target="_blank"><b>Seguindo: </b></a><span
                            class="badge badge-info">${dados.following}</span></li>
                </ul>
            </div>
        </div>
        
       `;

            divTela.innerHTML = texto;
        })

})
