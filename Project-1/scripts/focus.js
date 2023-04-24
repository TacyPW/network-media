var currId = "line0";
var idStr = "#line";
var currIndex = 0;
var numItems;

$(document).ready(function () {
    $(document).keydown(function (e) { 
        
        if (currIndex < $('.linepair').length) {
            
            switch (e.which) {
                case 40:
                    downLine();
                    break;
                case 38:
                    upLine();
                    break;
                case 37:
                    upLine();
                    break;
                case 39:
                    downLine();
                    break;
                default:
                    break;
            }
        }
    });
});

function downLine() {
    if (currIndex < $('.linepair').length-1) {
        const nextLine = document.getElementById((idStr + String((currIndex + 1))).replace('#',''));
        const y = nextLine.offsetTop - (window.innerHeight / 2);
        showfigure((idStr + String((currIndex + 1))).replace('#',''));
        $(idStr + String(currIndex)).removeClass('active-line');  
        $(idStr + String(currIndex + 1)).addClass('active-line');
        
        setTimeout(function() {
        window.scrollTo(
            {
            top: y,
            left: 0,
            behavior: 'smooth'
            }
        ), 100
        })
        currIndex++;
    }
}

function upLine() {
    
    if (currIndex > 0) {
        const nextLine = document.getElementById((idStr + String((currIndex - 1))).replace('#',''));
        const y = nextLine.offsetTop - (window.innerHeight / 2);
        
        $(idStr + String(currIndex)).removeClass('active-line');  
        $(idStr + String(currIndex - 1)).addClass('active-line');
        setTimeout(function() {
            window.scrollTo(
                {
                top: y,
                left: 0,
                behavior: 'smooth'
                }
            ), 100
        })
        currIndex--;

    }
}