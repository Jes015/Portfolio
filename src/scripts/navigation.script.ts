const setClass = (element: HTMLAnchorElement) => {
    element.classList.add("navigation__ancord-selected")
}

const removeClass = (element: HTMLAnchorElement) => {
    element.classList.remove("navigation__ancord-selected")
}

const setElementStyles = (CurrentAnchorElement: HTMLAnchorElement) => {
    setClass(CurrentAnchorElement)
}

const removeElementStyles = (ElementArray: HTMLCollection) => {
    for (let element of ElementArray) {
        removeClass((element as HTMLLIElement).children[0] as HTMLAnchorElement)
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