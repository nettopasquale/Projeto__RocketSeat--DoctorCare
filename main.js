window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnSroll()
    activeMenuAtCurrentSection(home)
    activeMenuAtCurrentSection(services)
    activeMenuAtCurrentSection(about)
    activeMenuAtCurrentSection(contact)
}

function activeMenuAtCurrentSection(section){
    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    //qauis dados vou precisar?

    //o topo da seção
    const sectionTop = section.offsetTop

    //a altura da seção
    const sectionHeight = section.offsetHeight
    
    // o topo da seção chegou ou ultrapassou a linha altp
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //infos dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha?' , sectionTopReachOrPassedTargetLine)

    // verificar se a base está abaixo da linha alvo
    // quais dados vou precisar ?
    console.log(sectionTop)
    console.log(sectionHeight)

    // a seção termina aonde?
    const sectionEndsAt = sectionTop + sectionHeight
    console.log(sectionEndsAt)

     // a seção termina aonde?
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?' , sectionEndPassedTargetLine)

    // limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && 
    !sectionEndPassedTargetLine

    console.log( "A linha chegou aos limites da seção?", sectionBoundaries)

    const sectionID = section.getAttribute("id")
    const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`);

    console.log("O elemento é: ", menuElement)

    menuElement.classList.remove('active')
    if (sectionBoundaries){
        menuElement.classList.add('active')
    }

}





function showNavOnScroll(){
    if(scrollY > 0) navigation.classList.add('scroll') 
    else navigation.classList.remove('scroll')
}

function showBackToTopButtonOnSroll(){
    if(scrollY > 400) backToTopButton.classList.add('show')
    else backToTopButton.classList.remove('show')
}

function openMenu(){
    document.body.classList.add('menu--expanded');
}

function closeMenu(){
    document.body.classList.remove('menu--expanded');
}


ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`)