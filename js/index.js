const commentArea = document.querySelector('.areaComment')
const comentario = document.querySelector('textarea')
const submit = document.querySelector('.submit')



let result=''
submit.addEventListener('click',function(){
    result+=`<div class="comments">
    <div class="card w-75 bg-secondary">
        <div class="card-body">
            <h5 class="card-title"><i class="material-icons">person</i>Nome da Pessoa</h5>
            <p class="card-text">${comentario.value}</p>
        </div>
    </div>
</div>`
    commentArea.innerHTML=result        
})

