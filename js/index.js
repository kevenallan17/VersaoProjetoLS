const commentArea = document.querySelector('.areaComment')
const comentario = document.querySelector('textarea')
const submit = document.querySelector('.submit')

function getCEP(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json))
}
function showContent(cep) {
    console.log(cep.localidade)
    return cep.localidade
}
function showPosition(position){
    console.log(position)
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
            cidade='Indefinido'
            result+=`<div class="comments">
                <div class="card w-100 bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title user"><i class="material-icons">person</i>${nome_comment}, ${cidade}</h5>
                        <p class="card-text">${comentario.value}</p>
                </div>
                </div>
            </div>`
            commentArea.innerHTML=result        
            comentario.value=''
        }else{
            url=`https://viacep.com.br/ws/${cep_commet}/json/`
            cidade=getCEP(url)
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
        }
    } 
})



    

