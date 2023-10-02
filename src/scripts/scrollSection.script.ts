const ScrollToTheUrlSection = () => {
    const actualSectionId = location.hash.slice(1)

    if (actualSectionId.trim() === '') return

    const $section = document.getElementById(actualSectionId)

    if ($section == null) return

    $section?.scrollIntoView({ behavior: "smooth" })
}

ScrollToTheUrlSection()