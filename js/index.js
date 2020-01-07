const commentArea = document.querySelector('.areaComment')
const comentario = document.querySelector('textarea')
const submit = document.querySelector('.submit')

function getCEP(url,nome,comentario) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json,nome,comentario))
}
function showContent(cep,nome,comentario) {
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

let result=''
submit.addEventListener('click',function(){
    let nome_comment=window.prompt('Informe seu nome: ')
    
    if (nome_comment==''){
        window.alert('Nome Inválido! Comentário não enviado.')
    }
    else if (nome_comment==null){
        comentario.value=''
    }else{
        let cep_commet=window.prompt('Informe seu CEP: ','Opcional')
        let cidade
        if (cep_commet==null){
            comentario.value=''
            
        }else if (cep_commet=='' || cep_commet=='Opcional'){
            cidade='Local Indefinido'
            result+=`<div class="comments">
                <div class="card w-100 bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title user"><i class="material-icons">person</i>${nome_comment} - ${cidade}</h5>
                        <p class="card-text">${comentario.value}</p>
                </div>
                </div>
            </div>`
            commentArea.innerHTML=result        
            comentario.value=''
        }else{
            cidade=getCEP(`https://viacep.com.br/ws/${cep_commet}/json/`,nome_comment,comentario.value)
        }
    } 
})



    

