export const calculateStarsForTheScreen = () => {
    const starWidth = 13 // 13px
    const starsCount = Math.floor(window.screen.width / starWidth) - 28

    return starsCount
}