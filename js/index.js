const commentArea = document.querySelector('.areaComment')
const comentario = document.querySelector('textarea')
const submit = document.querySelector('.submit')

let result=''
submit.addEventListener('click',function(){
    let nome_comment=window.prompt('Informe seu nome: ')
    if (nome_comment==''){
        window.alert('Nome Inválido! Comentário não enviado.')
    }else if (nome_comment==null){
        comentario.value=''
    }else{
        result+=`<div class="comments">
                <div class="card w-100 bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title user"><i class="material-icons">person</i>${nome_comment}</h5>
                        <p class="card-text">${comentario.value}</p>
                </div>
                </div>
            </div>`
        commentArea.innerHTML=result        
        comentario.value=''
    }
})



    

