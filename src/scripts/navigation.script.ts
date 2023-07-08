const NavigationContext = () => {

    const className = "navigation__ancord-selected"

    const setElementStyles = (CurrentAnchorElement: HTMLAnchorElement) => {
        CurrentAnchorElement.classList.add(className)
    }

    const removeElementStyles = (ElementArray: HTMLCollection) => {
        for (let element of ElementArray) {
            element = (element as HTMLElement).children[0]
            element.classList.remove(className)
        }
    }

    const clickEvent = (target: EventTarget | null, currentTarget: EventTarget | null) => {
        const CurrentListElement = currentTarget as HTMLUListElement
        removeElementStyles(CurrentListElement.children)

        const CurrentAnchorElement = target as HTMLAnchorElement
        setElementStyles(CurrentAnchorElement)
    }

    const main = () => {
        const listElement = document.getElementsByClassName("navigation__list")[0] as HTMLUListElement

        setElementStyles(listElement.children[0].children[0] as HTMLAnchorElement)

        listElement.addEventListener("click", ({ target, currentTarget }) => {
            clickEvent(target, currentTarget)
        })
    }

    main()
}

NavigationContext()