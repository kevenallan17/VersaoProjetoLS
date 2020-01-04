const all = document.querySelector('.row')
let result=''
function exibir(array){
    for (let arma of array){
            result+=`<div class="col-sm">
                        <h4 class="card-title">${arma.nome}</h4>
                        <img src="armas/${arma.tipo}/${arma.nome}.png">
                        <button value="${arma.nome}" class="btn btn-primary bg-warning text-dark">Status</button>
                        <div class="card-body"></div>
                        <div class="status hidden" >
                        <div class="status1" style="display:flex; flex-direction:crow; flex-wrap:wrap;">
                            <div>Dano:</div>                      
                            <div  class="progress" style="width:250px;margin-top:3px;"> 
                                <div class="progress-bar progress-bar-striped progress-bar-animated
                                bg-warning" role="progressbar" style="width: ${arma.dano}%" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100">${arma.dano}</div>
                        </div> 
                        <div>Tipo da Arma:</div><div>${arma.tipo}</div>                                 
                        </div> 
                        <div>Carregador:${arma.carregador}</div>
                        <div>Calibre:${arma.calibre}</div>
                        <div>Modo de Tiro:${arma.modo_de_tiro}</div>
                        <div>Disponivel:${arma.disponivel}</div>
                        </div>
                    </div>
                    </div>`
                    
        }
    all.innerHTML=result
}
exibir(armas)


const buttons=document.querySelectorAll('button')   
let stats=''
for (let button of buttons){    
    button.addEventListener('focus',function(event){
        for (let arma of armas){
            
            if (button.value == arma.nome){
                stats+=`
                <div class="col-sm">
                <h4 class="card-title">${arma.nome}</h4>
                <img src="armas/${arma.tipo}/${arma.nome}.png">
                <button value="${arma.nome}" class="btn btn-primary bg-warning text-dark">Status</button>
                <div class="card-body"></div>
                <div class="status" >
                <div class="status1" style="display:flex; flex-direction:crow; flex-wrap:wrap;">
                    <div>Dano:</div>                      
                    <div  class="progress" style="width:250px;margin-top:3px;"> 
                        <div class="progress-bar progress-bar-striped progress-bar-animated
                        bg-warning" role="progressbar" style="width: ${arma.dano}%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">${arma.dano}</div>
                </div> 
                <div>Tipo da Arma:</div><div>${arma.tipo}</div>                                 
                </div> 
                <div>Carregador:${arma.carregador}</div>
                <div>Calibre:${arma.calibre}</div>
                <div>Modo de Tiro:${arma.modo_de_tiro}</div>
                <div>Disponivel:${arma.disponivel}</div>
                </div>
                </div>
                </div>`
        
            }else{
               stats+=`
                <div class="col-sm">
                <h4 class="card-title">${arma.nome}</h4>
                <img src="armas/${arma.tipo}/${arma.nome}.png">
                <button value="${arma.nome}" class="btn btn-primary bg-warning text-dark">Status</button>
                <div class="card-body"></div>
                <div class="status hidden" >
                <div class="status1" style="display:flex; flex-direction:crow; flex-wrap:wrap;">
                    <div>Dano:</div>                      
                    <div  class="progress" style="width:250px;margin-top:3px;"> 
                        <div class="progress-bar progress-bar-striped progress-bar-animated
                        bg-warning" role="progressbar" style="width: ${arma.dano}%" aria-valuenow="100"
                        aria-valuemin="0" aria-valuemax="100">${arma.dano}</div>
                </div> 
                <div>Tipo da Arma:</div><div>${arma.tipo}</div>                                 
                </div> 
                <div>Carregador:${arma.carregador}</div>
                <div>Calibre:${arma.calibre}</div>
                <div>Modo de Tiro:${arma.modo_de_tiro}</div>
                <div>Disponivel:${arma.disponivel}</div>
                </div>
                </div>
                </div>`
            }
            
        }
        all.innerHTML=stats
        
    })
    
}

// filter_name.addEventListener('keyup',function(){
//    if (filter_name.value==''){
//        exibir(armas)
//     }
//     else{
//         let fil=armas.filter(arma=>arma.nome.includes(filter_name.value))
//         exibir(fil)
//     }
//  })