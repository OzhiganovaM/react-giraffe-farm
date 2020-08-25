const MIN_SCROLL_WIDTH = 20
const SCROLL_RIGHT_MARGIN = 4

class ScrollBar {
    constructor() {
        this.isInit = false
        this.isDrag = false
        this.previousX = 0
    }

    init() {
        if (this.isInit === true) return

        this.isInit = true

        this.slider = document.querySelector('#slider')
        this.content = document.querySelector('.giraffe-scroll-content')
        this.scrollbar = document.querySelector('#scrollbar')

        this.slider.addEventListener('mousedown', (e)=>{this.mousedown(e)})
        document.addEventListener('mouseup', (e)=>{this.mouseup(e)})
        document.addEventListener('mousemove', (e)=>{this.mousemove(e)})

        this.updateScroll()
    }

    updateScroll() {
        this.maxWidth = this.scrollbar.offsetWidth - this.slider.offsetWidth
        this.maxWidth = this.maxWidth >= SCROLL_RIGHT_MARGIN ? this.maxWidth - SCROLL_RIGHT_MARGIN : this.maxWidth
        this.maxScrollTranslate = this.content.scrollWidth - this.content.offsetWidth

        if ( this.maxScrollTranslate < (this.scrollbar.offsetWidth - MIN_SCROLL_WIDTH) ) {
            this.slider.style.width = this.scrollbar.offsetWidth - this.maxScrollTranslate + 'px'
        } else {
            this.slider.style.width = MIN_SCROLL_WIDTH + 'px'
        }

        if ( this.maxScrollTranslate === 0 ) {
            this.scrollbar.style.visibility = 'hidden'
            this.content.style.transform = 'translateX(0px)'
            this.slider.style.left = '0px'
        } else {
            this.scrollbar.style.visibility = 'visible'
        }
    }

    moveContent() {
        let leftValue = parseInt(this.slider.style.left) / this.maxWidth
        this.content.style.transform = 'translateX(' + ( -this.maxScrollTranslate * leftValue ) + 'px)'
    }

    moveSliderToRight(e) {
        let delta = e.x - this.previousX
        let currentLeftValue = this.getSliderPosition()
        let newLeftValue = currentLeftValue + delta
        if (newLeftValue > this.maxWidth) newLeftValue = this.maxWidth

        this.setSliderPosition(newLeftValue, e.x)
    }

    moveSliderToLeft(e) {
        let delta = this.previousX - e.x
        let currentLeftValue = this.getSliderPosition()
        let newLeftValue = currentLeftValue - delta
        if ( newLeftValue < 0 ) newLeftValue = 0

        this.setSliderPosition(newLeftValue, e.x)
    }

    getSliderPosition() {
        return this.slider.style.left ? parseInt(this.slider.style.left) : 0
    }

    setSliderPosition(value, currentX) {
        this.slider.style.left = value + 'px'
        this.previousX = currentX
    }

    mouseup(e) {
        // это какой-то костыль
        this.updateScroll()

        this.isDrag = false
    }

    mousedown(e) {
        this.isDrag = true
        this.previousX = e.x
    }

    mousemove(e) {
        if (this.isDrag) {
            // disable other mouse activity
            e.preventDefault()
            e.stopPropagation()

            if ( e.x > this.previousX ) {
                // move slider right
                this.moveSliderToRight(e)
            } else if ( e.x < this.previousX ) {   
                // move slider left 
                this.moveSliderToLeft(e)
            }
            // move content
            this.moveContent()
        }
    }
}

const scrollBar = new ScrollBar()

export default scrollBar