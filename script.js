window.addEventListener("DOMContentLoaded", ()=>{
   const boxhamburguer = document.querySelector(".boxhamburguer")
   const hambuguer = document.querySelector(".hamburguer")
   const boximg = document.querySelector(".boximg")
   const containermenu = document.querySelector("#navhome")
   
   boxhamburguer.addEventListener("click", ()=>{
       boximg.classList.toggle("novisible")
       containermenu.classList.toggle("active")
       hambuguer.classList.toggle("hamburgueractive")
    })

    document.addEventListener("click", (event) => {
        if (containermenu.classList.contains("active") &&
            !containermenu.contains(event.target) &&
            !boxhamburguer.contains(event.target) &&
            !boximg.contains(event.target)) {
            containermenu.classList.remove("active");
            boximg.classList.remove("novisible");
            hambuguer.classList.remove("hamburgueractive");
        }
    });


    const textvisible = document.querySelectorAll(".colortext")
    const oculttext = document.querySelectorAll(".oculttext")
    textvisible.forEach((text)=>{
        text.addEventListener("click", ()=>{
            
            oculttext.forEach((visible)=>{
               
                visible.classList.toggle("visibletext")
                
            })
        })

    })

    const textskills = document.querySelectorAll(".textskills")
    const boxdescriptionskills= document.querySelector(".boxdescriptionskills")
    const arrowremove = document.querySelector(".bi-arrow-return-left")
    const tech = document.querySelectorAll(".tech")
    const cardskill = document.querySelector(".cardskill")
   
    console.log(textskills[0])
    
    console.log(cardskill.children[2].innerHTML)

    textskills.forEach((text)=>{
         text.addEventListener("click", ()=>{
            boxdescriptionskills.classList.add("descriptionactive")
         })


    })

    textskills[0].addEventListener("click", ()=>{
        cardskill.children[1].innerHTML = `${tech[0].innerHTML}`

        
        if(cardskill.children.innerHTML === ""){
            cardskill.children[2].innerHTML = "HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas da web."
           
        }else{
            cardskill.children[2].innerHTML = ""
            cardskill.children[2].innerHTML = "HTML (HyperText Markup Language) é a linguagem padrão usada para criar e estruturar páginas da web. <br><br> Estrutura de Documento: HTML usa tags para definir a estrutura e o conteúdo de uma página. Tags são elementos que delimitam o início e o fim de um conteúdo. Por exemplo, h1 define um cabeçalho principal, e p define um parágrafo."
        }

    })

    textskills[1].addEventListener("click", ()=>{
        cardskill.children[1].innerHTML = `${tech[1].innerHTML}`

           
        if(cardskill.children.innerHTML === ""){
            cardskill.children[2].innerHTML = "CSS (Cascading Style Sheets) é usado para estilizar e layoutizar documentos HTML. Sua função principal é definir a aparência visual dos elementos em uma página da web, controlando aspectos como cores, fontes, tamanhos, espaçamentos e layout. <br><br> Em resumo, CSS permite criar páginas web visualmente atraentes e organizadas."
           
        }else{
            cardskill.children[2].innerHTML = ""
            cardskill.children[2].innerHTML = "CSS (Cascading Style Sheets) é usado para estilizar e layoutizar documentos HTML. Sua função principal é definir a aparência visual dos elementos em uma página da web, controlando aspectos como cores, fontes, tamanhos, espaçamentos e layout. <br><br> Em resumo, CSS permite criar páginas web visualmente atraentes e organizadas."
        }

    })

    textskills[2].addEventListener("click", ()=>{
        cardskill.children[1].innerHTML = `${tech[2].innerHTML}`

        if(cardskill.children.innerHTML === ""){
            cardskill.children[2].innerHTML = "JavaScript (JS) é uma linguagem de programação amplamente utilizada para adicionar interatividade e dinamismo às páginas da web. Ele é executado no navegador do cliente e permite criar funcionalidades que não são possíveis apenas com HTML e CSS."
           
        }else{
            cardskill.children[2].innerHTML = ""
            cardskill.children[2].innerHTML = "JavaScript (JS) é uma linguagem de programação amplamente utilizada para adicionar interatividade e dinamismo às páginas da web. Ele é executado no navegador do cliente e permite criar funcionalidades que não são possíveis apenas com HTML e CSS.<br><br> Em resumo, JavaScript torna as páginas da web mais interativas e dinâmicas, permitindo que os desenvolvedores criem experiências ricas para os usuários."
        }


    })

    textskills[3].addEventListener("click", ()=>{
        cardskill.children[1].innerHTML = `${tech[3].innerHTML}`

        if(cardskill.children.innerHTML === ""){
            cardskill.children[2].innerHTML = "React.js é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário, especialmente para aplicações web de uma única página (SPA). É amplamente utilizado devido à sua eficiência e simplicidade na construção de interfaces dinâmicas e reutilizáveis.<br><br>React.js facilita a construção de interfaces web dinâmicas e complexas com uma abordagem baseada em componentes, melhorando a eficiência e a manutenção do código. Ele se destaca por sua capacidade de criar interfaces rápidas e reativas através do Virtual DOM e o uso de componentes reutilizáveis."
           
        }else{
            cardskill.children[2].innerHTML = ""
            cardskill.children[2].innerHTML = "React.js é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário, especialmente para aplicações web de uma única página (SPA). É amplamente utilizado devido à sua eficiência e simplicidade na construção de interfaces dinâmicas e reutilizáveis.<br><br>React.js facilita a construção de interfaces web dinâmicas e complexas com uma abordagem baseada em componentes, melhorando a eficiência e a manutenção do código. Ele se destaca por sua capacidade de criar interfaces rápidas e reativas através do Virtual DOM e o uso de componentes reutilizáveis."
        }
    })

    textskills[4].addEventListener("click", ()=>{
        cardskill.children[1].innerHTML = `${tech[4].innerHTML}`
        if(cardskill.children.innerHTML === ""){
            cardskill.children[2].innerHTML = "O Git é um sistema de controle de versão distribuído usado para gerenciar e acompanhar alterações em projetos de código-fonte. Ele permite que vários desenvolvedores trabalhem juntos de forma eficiente, mantendo um histórico completo das mudanças e facilitando a colaboração. <br><br> Com o Git, você pode criar ramificações (branches) para desenvolver novas funcionalidades de forma isolada e depois mesclá-las (merge) ao projeto principal quando estiverem prontas."
           
        }else{
            cardskill.children[2].innerHTML = ""
            cardskill.children[2].innerHTML = "O Git é um sistema de controle de versão distribuído usado para gerenciar e acompanhar alterações em projetos de código-fonte. Ele permite que vários desenvolvedores trabalhem juntos de forma eficiente, mantendo um histórico completo das mudanças e facilitando a colaboração. <br><br> Com o Git, você pode criar ramificações (branches) para desenvolver novas funcionalidades de forma isolada e depois mesclá-las (merge) ao projeto principal quando estiverem prontas."
        }

    })

    textskills[5].addEventListener("click", ()=>{
        cardskill.children[1].innerHTML = `${tech[5].innerHTML}`

             if(cardskill.children.innerHTML === ""){
            cardskill.children[2].innerHTML = " SEO (Search Engine Optimization) é o processo de otimizar um site ou página da web para melhorar sua visibilidade e classificação nos resultados de mecanismos de busca, como Google.<br><br> O objetivo é aumentar o tráfego orgânico (não pago) e melhorar a qualidade do tráfego para um site."
           
        }else{
            cardskill.children[2].innerHTML = ""
            cardskill.children[2].innerHTML = " SEO (Search Engine Optimization) é o processo de otimizar um site ou página da web para melhorar sua visibilidade e classificação nos resultados de mecanismos de busca, como Google.<br><br> O objetivo é aumentar o tráfego orgânico (não pago) e melhorar a qualidade do tráfego para um site."
        }


    })

    arrowremove.addEventListener("click", ()=>{
        boxdescriptionskills.classList.remove("descriptionactive")
    
    })

    const listlinks = document.querySelectorAll(".listlinks")
    const $section = document.querySelectorAll(".section")
    const section = document.querySelectorAll("section")
   

    
    const observenav = new IntersectionObserver((iten)=>{
       

        iten.forEach((sectioniten)=>{
        
       if(sectioniten.isIntersecting === true){
        sectioniten.target.classList.add("sectionvisible")
        
       }else if(sectioniten.isIntersecting === false){
        sectioniten.target.classList.remove("sectionvisible")

       }
     })
    }, {
        threshold: .2
    })

    $section.forEach((section)=>{
       observenav.observe(section)

    })

    
    const link1 = document.querySelector("#listlink1")
    const link2 = document.querySelector("#listlink2")
    const link3 = document.querySelector("#listlink3")
    const link4 = document.querySelector("#listlink4")

    const sectionone = document.querySelector("#sectionone")
    const observeone = new IntersectionObserver((iten)=>{
        iten.forEach((visible)=>{
          if(visible.isIntersecting){
            link1.classList.add("listlinks")
          }else{
            link1.classList.remove("listlinks")
          }
        })
        
    },{
        threshold: .5
    })
    observeone.observe(sectionone)


    const sectiontow = document.querySelector("#sectiontow")
    const observetow = new IntersectionObserver((iten)=>{
        iten.forEach((visible)=>{
          if(visible.isIntersecting){
            link2.classList.add("listlinks")
          }else{
            link2.classList.remove("listlinks")
          }
        })
        
    },{
        threshold: 1
    })
    observetow.observe(sectiontow)



    const sectionthree = document.querySelector("#sectionthree")
    const observethree = new IntersectionObserver((iten)=>{
        iten.forEach((visible)=>{
          if(visible.isIntersecting){
            link3.classList.add("listlinks")
          }else if(visible.isIntersecting === false){
            link3.classList.remove("listlinks")
          }
        })
        
    },{
        threshold: .9
    })
    observethree.observe(sectionthree)

 
    const sectionfor = document.querySelector("#sectionfor")
    const observefor = new IntersectionObserver((iten)=>{
        iten.forEach((visible)=>{
          if(visible.isIntersecting){
            link4.classList.add("listlinks")
          }else{
            link4.classList.remove("listlinks")
          }
        })
        
    },{
        threshold: .2
    })
    observefor.observe(sectionfor)



})