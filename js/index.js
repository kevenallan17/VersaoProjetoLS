const commentArea = document.querySelector('.areaComment')
const comentario = document.querySelector('textarea')
const submit = document.querySelector('.submit')

function getCEP(url,nome,comentario) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json,nome,comentario))
}
function showContent(cep,nome,comentario) {
    if (cep.erro){
        cep.localidade='Local Indefinido'
    }

    result+=`<div class="comments">
                <div class="card w-100 bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title user"><i class="material-icons">person</i>${nome} - ${cep.localidade}</h5>
                        <p class="card-text">${comentario}</p>
                </div>
                </div>
            </div>`
            commentArea.innerHTML=result        
            comentario.value=''
}

function notCEP(nome,comentario){
    cidade='Local Indefinido'
    result+=`<div class="comments">
        <div class="card w-100 bg-secondary">
            <div class="card-body">
                <h5 class="card-title user"><i class="material-icons">person</i>${nome} - ${cidade}</h5>
                <p class="card-text">${comentario}</p>
        </div>
        </div>
    </div>`
    commentArea.innerHTML=result        
    comentario.value=''
}
let result=''
submit.addEventListener('click',function(){
    let nome_comment=window.prompt('Informe seu nome: ')
    
    if (nome_comment==''){
        window.alert('Nome Inválido! Comentário não enviado.')
    }
    else if (nome_comment==null){
        comentario.value=''
    }else{
        let cep_comment=window.prompt('Informe seu CEP: ','"00000000" (Opcional)')
        if (cep_comment==null){
            comentario.value=''
            
        }else if (cep_comment=='' || cep_comment=='"00000000" (Opcional)'){
            notCEP(nome_comment,comentario.value)
        }else{
            let notcep='false'
            var regExp=/\d{8}/
            while (true){
                if (regExp.test(cep_comment)){
                    cidade=getCEP(`https://viacep.com.br/ws/${cep_comment}/json/`,nome_comment,comentario.value)
                    break
                }else if (cep_comment=='' || cep_comment=='"00000000" (Opcional)'){
                    notCEP(nome_comment,comentario.value)
                    break
                }else if (cep_comment==null){
                    comentario.value=''
                    break
                }
                window.alert('Cep invalido')
                cep_comment=window.prompt('CEP:','"00000000" (Opcional)')
            }
            
                
            
        }
    } 
})



    

