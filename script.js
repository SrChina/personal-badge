//variaveis: let ou const; let: pode ser alterada;const: variável constante e inalteravel

const linksSocialMedia = {
    github: 'SrChina',
    facebook: 'Gustavo Carvalho',
    instagram: '_cha1na_'
}

function changeSocialMediaLinks() {
    userName.textContent = 'Gustavo Carvalho'
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLinkGithub.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}
getGithubProfileInfos()