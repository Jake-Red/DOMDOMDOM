document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement('button') //Adds Button to page
    let btnText = document.createTextNode('Add Square') //Adds text to button
    document.body.appendChild(button) //Appends button to document.
    button.appendChild(btnText) //Appends text to button
    let clickCount = 0; //ClickCount will determine div ID

    button.addEventListener('click', function () { //Monitors button and listens for a click
        clickCount++ //Counts up by one for every click.
        let div = document.createElement('div') //Creates div
        div.className = "square" //Sets classname as square
        div.id = clickCount //Sets the id to be equal to the clickCount var
        document.body.appendChild(div) //Appends div to document body.
        let paragraph = document.createElement('p') //Creates paragraph element
        let idDisplay = div.getAttribute('id') //Assigns the id as the variable's value.
        let idNum = document.createTextNode(idDisplay) //turns the variable into a Text Node.
        paragraph.appendChild(idNum) //Appends the ID to the paragraph element.
        div.appendChild(paragraph) //Appends the paragraph to the div element.
        paragraph.style.opacity = '0' //Changes opacity to 0 so that the ID can not be seen.
        div.addEventListener('mouseenter', function () { //Eventlistener for the div element. Mouse enter is used here because it's only triggered when the mouse cursor enters the element. I used hover originally and it would continuously input the ID into the div.
            paragraph.style.opacity = '1' //When the mouse enters the paragraph element's opacity is turned on. This shows the ID.
        })
        div.addEventListener('mouseleave', function () { //Mouseleave is only triggered when the mouse leaves the border of the div.
            paragraph.style.opacity = '0' //Once triggered the opacity is returned to 0. This visually removes the ID.
        })
        div.addEventListener('click', function () { //Click listener for individual divs in order to change colors.
            let colorNum = Math.floor(Math.random() * 10) //Selects random integer between 1 and 9. 10 is the exclusive number.
            if (colorNum == 1) { //This series of statements takes into account the random number chosen and chooses a color based on that.
                div.style.backgroundColor = 'purple'
            } else if (colorNum == 2) {
                div.style.backgroundColor = 'green'
            } else if (colorNum == 3) {
                div.style.backgroundColor = 'blue'
            } else if (colorNum == 4) {
                div.style.backgroundColor = 'pink'
            } else if (colorNum == 5) {
                div.style.backgroundColor = 'brown'
            } else if (colorNum == 6) {
                div.style.backgroundColor = 'tomato'
            } else if (colorNum == 7) {
                div.style.backgroundColor = 'indigo'
            } else if (colorNum == 8) {
                div.style.backgroundColor = 'fuchsia'
            } else if (colorNum == 9) {
                div.style.backgroundColor = 'coral'
            }
        })
        div.addEventListener('dblclick', function () { //Adds event listener for a double click.
            if (div.id % 2 == 0) { //Checks to see if ID is an equal or odd number.
                let nextDivId = parseInt(div.id) + 1 //Finds the relevant ID that is 1 more than the original ID.
                let deleteDiv = document.getElementById(nextDivId) //Retrieves the div element with corresponding ID.
                if (deleteDiv == null) { //This occurs if the corresponding ID cannot be found.
                    alert(`Can not delete square because square ID ${nextDivId} does not exist.`)
                } else { //This removes the div element if the corresponding ID can be found.
                    deleteDiv.parentNode.removeChild(deleteDiv)
                }
            } else { //This occurs when the div element's ID is an odd number.
                let nextDivId = parseInt(div.id) - 1 //Finds the relevant ID that is 1 less than the original ID.
                let deleteDiv = document.getElementById(nextDivId) //Retrieves the div element with the corresponding ID.
                if (deleteDiv == null) { //This occurs if the corresponding ID cannot be found.
                    alert(`Can not delete square because square ID ${nextDivId} does not exist.`)
                } else { //This removes the div element if the corresponding ID can be found.
                    deleteDiv.parentNode.removeChild(deleteDiv)
                }
            }
        })
    })

})