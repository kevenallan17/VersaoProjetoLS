const area = document.querySelector('.row')

const ArmasList=[
    {
    "nome":"MINI 14",
    "tipo":"DMR",
    "dano":"44",
    "carregador":"20",	
    "calibre":"5.56 mm",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas" 
    },
    
    {
    "nome":"SKS",
    "tipo":"DMR",
    "dano":"55",
    "carregador":"10",
    "calibre":"7.62 mm",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"SLR",
    "tipo":"DMR",
    "dano":"58",
    "carregador":"10",
    "calibre":"7.62 mm",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"KAR98",
    "tipo":"Sniper",
    "dano":"72",
    "carregador":"5",
    "calibre":"7.62 mm",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"M24",
    "tipo":"Sniper",
    "dano":"84",
    "carregador":"5",
    "calibre":"7.62 mm",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    
    {
    "nome":"AWM",
    "tipo":"Sniper",
    "dano":"132",
    "carregador":"5",
    "calibre":".300 w. Magnum",
    "modo_de_tiro":"Semi",
    "disponivel":"Drop"
    },
    {
    "nome":"AKM",
    "tipo":"Rifle de Assalto",
    "dano":"48",
    "carregador":"30",
    "calibre":"7.62 mm",
    "modo_de_tiro":"Auto/Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"M416",
    "tipo":"Rifle de Assalto",
    "dano":"41",
    "carregador":"30",
    "calibre":"5.56 mm",
    "modo_de_tiro":"Auto/Semi",
    "disponivel":"Todos os Mapas"
    },
    
    {
    "nome":"AUG",
    "tipo":"Rifle de Assalto",
    "dano":"44",
    "carregador":"30",
    "calibre":"5.56 mm",
    "modo_de_tiro":"Auto/Semi",
    "disponivel":"Drop"
    },
    
    {
    "nome":"VECTOR",
    "tipo":"Submetralhadora",
    "dano":"31",
    "carregador":"19",
    "calibre":"9 mm",
    "modo_de_tiro":"Auto/Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"TOMMY GUN",
    "tipo":"Submetralhadora",
    "dano":"38",
    "carregador":"25",
    "calibre":".45 ACP",
    "modo_de_tiro":"Auto/Semi",
    "disponivel":"Todos os Mapas"        
    },
    {
    "nome":"BISON",
    "tipo":"Submetralhadora",
    "dano":"35",
    "carregador":"53",
    "calibre":"9 MM",
    "modo_de_tiro":"Auto/Semi",
    "disponivel":"Apenas Vikendi"
    },
    
    {
    "nome":"S686",
    "tipo":"Escopeta",
    "dano":"25",
    "carregador":"2",
    "calibre":"12",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"S1987",
    "tipo":"Escopeta",
    "dano":"25",
    "carregador":"5",
    "calibre":"12",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"S12K",
    "tipo":"Escopeta",
    "dano":"22",
    "carregador":"5",
    "calibre":"12",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"M249",
    "tipo":"Armas Especiais",
    "dano":"44",
    "carregador":"100",
    "calibre":"5.56 mm",
    "modo_de_tiro":"Auto",
    "disponivel":"Drop"
    },
    {
    "nome":"CROSSBOW",
    "tipo":"Armas Especiais",
    "dano":"105",
    "carregador":"1",
    "calibre":"N/A",
    "modo_de_tiro":"N/A",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"DP28",
    "tipo":"Armas Especiais",
    "dano":"45",
    "carregador":"47",
    "calibre":"7.62 mm",
    "modo_de_tiro":"Auto",
    "disponivel":"Exceto Vikendi"
    },

    {
    "nome":"P92",
    "tipo":"Pistola",
    "dano":"29",
    "carregador":"7",
    "calibre":"9 mm",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    },
    {
    "nome":"R45",
    "tipo":"Pistola",
    "dano":"49",
    "carregador":"6",
    "calibre":".45 ACP",
    "modo_de_tiro":"Semi",
    "disponivel":"Sanhok/Miramar/Vikendi"
    },
    {
    "nome":"DESERT EAGLE",
    "tipo":"Pistola",
    "dano":"62",
    "carregador":"7",
    "calibre":".45 ACP",
    "modo_de_tiro":"Semi",
    "disponivel":"Todos os Mapas"
    }
]

function exibir(array){
    result=''
    for (i of array){
        result+=`<div class="col-sm">
                    <h4 class="card-title">${i.nome}</h4>
                    <img src="armas/${i.tipo}/${i.nome}.png">
                    <button class="btn btn-primary bg-warning text-dark" value="${i.nome}">Status</button>
                    <div id="${i.nome}" class="card-body status">   
                        <div class="status1">
                            <div>Dano:</div>                      
                            <div class="progress"> 
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: ${i.dano}%" aria-valuenow="${i.dano}" aria-valuemin="0" aria-valuemax="100">${i.dano}%</div>
                            </div> 
                            Carregador: ${i.carregador}<br>Calibre: ${i.calibre}<br>Modo de Tiro: ${i.modo_de_tiro}<br>Disponivel em: ${i.disponivel}<br>Tipo: ${i.tipo}                           
                        </div>
                    </div>
                </div>`                     
    }
    area.innerHTML=result
}

exibir(ArmasList)
/*
result=''
for (i of ArmasList){
    result+=`<div class="col-sm">
                <h4 class="card-title">${i.nome}</h4>
                <img src="armas/${i.tipo}/${i.nome}.png">
                <button class="btn btn-primary bg-warning text-dark" value="${i.nome}" onclick="exibir()">Status</button>
                <div id="${i.nome}" class="card-body status">   
                
                </div>
            </div>`                     
}
area.innerHTML=result
*/

const buttons = document.querySelectorAll('.btn')
const AreaStatus = document.querySelectorAll('.status')

for (i of AreaStatus){
    i.style.display='none'
}

/*
function exibir2(){         
    for (i of buttons){
        for (j of AreaStatus){
            if(i.value==j.id){
                if(j.style.display=='none'){ 
                    j.style.display='inline'
                }
                else{
                    j.style.display='none'
                }    
            }       
        }
    }         
}
*/


for (i of buttons){
    i.addEventListener('click',function(){
        for(j of AreaStatus){
            if(j.style.display=='none'){ 
                j.style.display='inline'
            }
            else{
                j.style.display='none'
            }                                            
        }
    })
}

const BuscaNome = document.querySelector('#filter-nome')
const BuscaTipo = document.querySelector('#filter-type')

const tipos = ['Todos','DMR','Sniper','Rifle de Assalto','Submetralhadora','Escopeta','Armas Especiais','Pistola']

result2=''

for(i of tipos){
    result2+=`<option value="${i}">${i}</option>`
}
BuscaTipo.innerHTML=result2


BuscaNome.addEventListener('keyup',function(){
    if(BuscaNome==''){
        exibir(ArmasList)
    }
    else{
        for (i of AreaStatus){
            i.style.display='none'
        }
        filtroNome=ArmasList.filter(a=> a.nome.includes(BuscaNome.value.toUpperCase()))   
        if (BuscaTipo.value=='Todos'){
            exibir(filtroNome)
        }
        /*
        else{
            filtroTipo=ArmasList.filter(a=>a.tipo.includes(BuscaTipo.value))
            for(i of filtroTipo){
                if(BuscaNome.value.includes(i.nome)){
                    filtroNome2=ArmasList.filter(a=> a.nome.includes(BuscaNome.value.toUpperCase()))
                    exibir(filtroNome2) 
                }
                
            }
            
        }*/
        /*
        for (i of buttons){
            i.addEventListener('click',function(){
                for(j of AreaStatus){
                    if(j.style.display=='none'){ 
                        j.style.display='inline'
                    }
                    else{
                        j.style.display='none'
                    }                                            
                }
            })
        }*/
    }
    if (event.key == 'Escape'){
        BuscaNome.value=''
        exibir(ArmasList)
      }
})

/*
BuscaNome.addEventListener('keyup',function(){
    if(BuscaNome.value==''){
        exibir(ArmasList)
    }
    else if (BuscaTipo.value=='Todos'){
        filter=ArmasList.filter(a=> a.nome.includes(BuscaNome.value))
        exibir(filter)
    }
    else{
        filter=ArmasList.filter(a=> a.nome.includes(BuscaNome.value))
        filtro=filter.filter(a=>a.tipo.includes(BuscaTipo.value))
        exibir(filtro)
}
    if (event.key == 'Escape'){
        BuscaNome.value=''
        exibir(ArmasList)
    }
})
*/




BuscaTipo.addEventListener('click',function(){
    if(BuscaTipo.value=='Todos'){
        exibir(ArmasList)
    }
    else{
        filtroTipo=ArmasList.filter(a => a.tipo.includes(BuscaTipo.value))
        exibir(filtroTipo)
        //filtroTipo=ArmasList.filter(a=>a.tipo.includes(BuscaTipo.value))
        //filtroName=filtroTipo.filter(b=> b.nome.includes(filtroTipo))
        
        //exibir(filtroName)
            
    }
})
