document.addEventListener("DOMContentLoaded",()=>{
    select = document.getElementsByTagName("select")[0]
    countries = ['Srbija','Crna Gora','Bosna i Hercegovina']
    countries.forEach(country=>content += "<option value='"+country+"'>"+country+"</option>")
    select.innerHTML = content
    inputs  = document.getElementsByTagName("input")
    inputs[5].checked = true

    
    inputs[4].addEventListener("click",()=>{
        if(/^[A-Z][a-z]+$/.test(inputs[0].value) &&
           /^[A-Z][a-z]+( [A-Z]+[a-z]+)*$/.test(inputs[1].value) &&
           /^.+$/.test(inputs[2].value) &&
           /^.+$/.test(inputs[3].value)){
            if(inputs[2].value===inputs[3].value){
                op =""
                if(inputs[5].checked) op="Da"
                if(inputs[6].checked) op="Ne"

                obj = {
                    firstName:inputs[0].value,
                    lastName: inputs[1].value,
                    country : document.getElementsByTagName("select")[0][document.getElementsByTagName("select")[0].selectedIndex].value,
                    password: inputs[2].value,
                    option  : op
                }
                document.getElementsByTagName("result")[0].innerHTML = `<br/>Ime: ${obj.firstName}<br>Prezime: ${obj.lastName}<br/>Zemlja: ${obj.country}<br/>
                Password: ${obj.password}<br/>Opcija: ${obj.option}`

            }else alert("Lozinke se ne podudaraju!")

        }else alert("Sva polja moraju biti popunjennja!")
    })
})