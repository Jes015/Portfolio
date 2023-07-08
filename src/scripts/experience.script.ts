const ExperienceContext = () => {

    const sectionElement = document.querySelector("#experience") as HTMLDivElement
    const firstElement = sectionElement.children[0].children[0] as HTMLElement

    const className = 'experience__hover'

    const mouseLeaveEvent = (firstElement: HTMLElement) => {
        firstElement.classList.toggle(className)
    }

    const main = () => {
        firstElement.classList.add(className)

        sectionElement.addEventListener('mouseleave', () => mouseLeaveEvent(firstElement))
        sectionElement.addEventListener('mouseenter', () => mouseLeaveEvent(firstElement))
    }

    main()
}

ExperienceContext()