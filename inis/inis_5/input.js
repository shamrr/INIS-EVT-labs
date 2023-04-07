const elements = Array.from(document.getElementsByClassName('target'))

elements.forEach(element => {
    element.addEventListener('mousedown', function handleClick(event){

        function moveAt(pageX, pageY){
            element.style.left = pageX - element.offsetWidth / 2 + 'px'
            element.style.top = pageY - element.offsetHeight /2 + 'px'
        }

        function onMouseMove(event){
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove)

        document.addEventListener('click', function(){
            document.removeEventListener('mousemove', onMouseMove)
        })
    })
})
