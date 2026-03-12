
function showSection(id) {

    document.querySelectorAll("section").forEach(sec => {
        sec.classList.remove("active")
    })

    document.getElementById(id).classList.add("active")

}

function runCommand() {

    let cmd = document.getElementById("cmd").value.toLowerCase()
    let output = document.getElementById("output")

    let responses = {

        "git init": "Inicializa un repositorio Git en el proyecto.",

        "git clone": "Clona un repositorio remoto a tu computadora.",

        "git status": "Muestra el estado actual del repositorio.",

        "git add": "Agrega archivos al área de preparación (staging).",

        "git commit": "Guarda los cambios en el historial del repositorio.",

        "git log": "Muestra el historial de commits del proyecto.",

        "git branch": "Muestra o crea ramas en el repositorio.",

        "git checkout": "Permite cambiar entre ramas.",

        "git merge": "Fusiona una rama con la rama actual.",

        "git remote add": "Conecta el repositorio local con uno remoto.",

        "git push": "Envía los commits locales al repositorio remoto.",

        "git pull": "Descarga cambios del repositorio remoto y los fusiona.",

        "git fetch": "Descarga cambios del repositorio remoto sin fusionarlos.",

        "git diff": "Muestra diferencias entre archivos o commits.",

        "git reset": "Revierte cambios o commits.",

        "git restore": "Restaura archivos modificados.",

        "git stash": "Guarda cambios temporales sin hacer commit.",

        "git tag": "Crea etiquetas para versiones del proyecto."

    }

    let found = false

    for (let key in responses) {

        if (cmd.includes(key)) {
            output.innerText = responses[key]
            found = true
            break
        }

    }

    if (!found) {
        output.innerText = "Comando no reconocido en el simulador."
    }

}