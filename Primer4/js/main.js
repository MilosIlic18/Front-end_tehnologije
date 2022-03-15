document.addEventListener("DOMContentLoaded",()=>{
    content =""
    for(i=0;i<3;i++){
        content+="<tr>"
        for(j=0;j<5;j++)
           content+="<td><input class='input'/></td>"
        content+="</tr>"
    }
    document.getElementsByTagName("tbody")[0].innerHTML = content


    inputs = document.getElementsByClassName("input")

    inputs[4].disabled = true
    inputs[9].disabled = true
    inputs[14].disabled = true
    
    inputs[4].placeholder= "Predite misem da dobijete mejl adresu"
    inputs[9].placeholder= "Predite misem da dobijete mejl adresu"
    inputs[14].placeholder= "Predite misem da dobijete mejl adresu"
    //Imena
    inputs[0].addEventListener("blur",(e)=>{/^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(e.target.value)?inputs[0].style.border="1px solid #000":inputs[0].style.border="1px solid red"})
    inputs[5].addEventListener("blur",(e)=>{/^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(e.target.value)?inputs[5].style.border="1px solid #000":inputs[5].style.border="1px solid red"})
    inputs[10].addEventListener("blur",(e)=>{/^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(e.target.value)?inputs[10].style.border="1px solid #000":inputs[10].style.border="1px solid red"})
    //Poeni
    inputs[1].addEventListener("blur",(e)=>{e.target.value>=1 && e.target.value<=100?inputs[1].style.border="1px solid #000":inputs[1].style.border="1px solid red"})
    inputs[6].addEventListener("blur",(e)=>{e.target.value>=1 && e.target.value<=100?inputs[6].style.border="1px solid #000":inputs[6].style.border="1px solid red"})
    inputs[11].addEventListener("blur",(e)=>{e.target.value>=1 && e.target.value<=100?inputs[11].style.border="1px solid #000":inputs[11].style.border="1px solid red"})
     //Smer
    inputs[2].addEventListener("blur",(e)=>{/^[A-Z]+$/.test(e.target.value)?inputs[2].style.border="1px solid #000":inputs[2].style.border="1px solid red"})
    inputs[7].addEventListener("blur",(e)=>{/^[A-Z]+$/.test(e.target.value)?inputs[7].style.border="1px solid #000":inputs[7].style.border="1px solid red"})
    inputs[12].addEventListener("blur",(e)=>{/^[A-Z]+$/.test(e.target.value)?inputs[12].style.border="1px solid #000":inputs[12].style.border="1px solid red"})
     
    //Indeks
    inputs[3].addEventListener("blur",(e)=>{e.target.value>=100 && e.target.value<=999?inputs[3].style.border="1px solid #000":inputs[3].style.border="1px solid red"})
    inputs[8].addEventListener("blur",(e)=>{e.target.value>=100 && e.target.value<=999?inputs[8].style.border="1px solid #000":inputs[8].style.border="1px solid red"})
    inputs[13].addEventListener("blur",(e)=>{e.target.value>=100 && e.target.value<=999?inputs[13].style.border="1px solid #000":inputs[13].style.border="1px solid red"})
    //Email
    inputs[4].addEventListener("mouseenter",(e)=>{
        if(/^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(inputs[0].value) && inputs[3].value>=100 && inputs[3].value<=999){
            e.target.value= inputs[0].value[inputs[0].value.indexOf(" ")+1].toLowerCase()+inputs[0].value[0].toLowerCase()+inputs[3].value+"d@student.etf.rs";
            inputs[4].style.border="1px solid #000"}
        else
        inputs[4].style.border="1px solid red"
    })
    inputs[9].addEventListener("mouseenter",(e)=>{
        if(/^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(inputs[5].value) && inputs[8].value>=100 && inputs[8].value<=999){
        e.target.value= inputs[5].value[inputs[5].value.indexOf(" ")+1].toLowerCase()+inputs[5].value[0].toLowerCase()+inputs[8].value+"d@student.etf.rs";
        inputs[9].style.border="1px solid #000"}
        else
        inputs[9].style.border="1px solid red"
    })
    inputs[14].addEventListener("mouseenter",(e)=>{
        if(/^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(inputs[10].value) && inputs[13].value>=100 && inputs[13].value<=999){
        e.target.value= inputs[10].value[inputs[10].value.indexOf(" ")+1].toLowerCase()+inputs[10].value[0].toLowerCase()+inputs[13].value+"d@student.etf.rs";
        inputs[14].style.border="1px solid #000"}
        else
        inputs[14].style.border="1px solid red"
    })
    document.getElementsByTagName("input")[0].addEventListener("blur",(e)=>{
        /^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(e.target.value)?
        document.getElementsByTagName("input")[0].style.border="1px solid #000":
        document.getElementsByTagName("input")[0].style.border="1px solid red"
    })



    document.getElementById("btn").addEventListener("click",()=>{
        if( /^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(inputs[0].value) &&
            /^[A-Z][a-z]+ [A-Z]+[a-z]+$/.test(inputs[5].value) &&
            /^[A-Z][a-z]+ [A-Z]+[a-z]+/.test(inputs[10].value) &&            
            (inputs[1].value>=1 && inputs[1].value<=100) && (inputs[6].value>=1 && inputs[6].value<=100) &&(inputs[11].value>=1 && inputs[11].value<=100) &&
            (inputs[3].value>=100 && inputs[3].value<=999) && (inputs[8].value>=100 && inputs[8].value<=999) &&(inputs[13].value>=100 && inputs[13].value<=999) &&
            /^[A-Z]+$/.test(inputs[2].value) && /^[A-Z]+$/.test(inputs[7].value) && /^[A-Z]+$/.test(inputs[12].value) &&
            /^[A-Z][a-z]+( [A-Z]+[a-z]+){1,}$/.test(document.getElementsByTagName("input")[0].value)
        ){
            if(inputs[4].value.length!==0 && inputs[9].value.length!==0 && inputs[14].value.length!==0){
                obj ={popunjava:document.getElementsByTagName("input")[0].value,razno: document.getElementsByTagName("input")[1].value,
                    lista:[
                        {ime:inputs[0].value,poeni:inputs[1].value,oznakaSmera:inputs[2].value,brojIndeksa:inputs[3].value,email:inputs[4].value},
                        {ime:inputs[5].value,poeni:inputs[6].value,oznakaSmera:inputs[7].value,brojIndeksa:inputs[8].value,email:inputs[9].value},
                        {ime:inputs[10].value,poeni:inputs[11].value,oznakaSmera:inputs[12].value,brojIndeksa:inputs[13].value,email:inputs[14].value}
                    ]
                }
                
                obj.razno = obj.razno.length>0?obj.razno:"Podrazumevano"
                obj.lista = obj.lista.sort((e,e1)=>e.poeni<e1.poeni)
                result=""
                //VANILLA
                /*result+=`[<br/>`
                for(i=0;i<obj.lista.length;i++)
                    result+=`\t{ ime: ${obj.lista[i].ime}, poeni: ${obj.lista[i].poeni}, oznaka smera: ${obj.lista[i].oznakaSmera}, broj indeksa: ${obj.lista[i].brojIndeksa}, email: ${obj.lista[i].email}}<br>`
                result+="<br>]"*/
                
                //ECMA
                result+=`popunio: ${obj.popunjava}<br/>`
                result+=`razno: ${obj.razno}<br/>`
                result+= "lista:\t"
                result+=`[<br/>`
                obj.lista.forEach((elem)=>{
                    result+=`\t\t{ ime: ${elem.ime}, poeni: ${elem.poeni}, oznaka smera: ${elem.oznakaSmera}, broj indeksa: ${elem.brojIndeksa}, email: ${elem.email} }<br>`
                })
                result+=`]`
                document.getElementsByTagName("pre")[0].innerHTML = result;
            }else alert("Polja email nisu popunjena! Dodirnite misem radi popunjavana!")
        }
        else alert("Niste sva polja popunili odgovaracujucem formatu!")
    })
})