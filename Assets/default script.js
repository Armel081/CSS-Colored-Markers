/*marker audio*/

$(function() {  
    const audio = new Audio("../Assets/Media/marker.wav" );
$('.marker').click(function()
{   const newAudio = audio.cloneNode()
    newAudio.play();
	});
});

const targets = 'h1, h2, p, a:not(.rainbow)'
const classmap = {
one: 'onetxt',
two: 'twotxt',
three: 'threetxt',
four: 'fourtxt',
five: 'fivetxt',
six: 'sixtxt',
seven: 'seventxt',
eight: 'eighttxt',
nine: 'ninetxt'
}
const allclasses = Object.values(classmap);

function clearSelection() {
allclasses.forEach(function(clz) { $(targets).removeClass(clz) });
}

function addSelection(sel) {
    $(targets).addClass(classmap[sel]);
}

/*marker one*/

$(function() {  
    $('.one').click(function(){
    clearSelection();
    addSelection('one')
    });
});

/*marker two*/


$(function() {  
    $('.two').click(function(){
    clearSelection();
    addSelection('two')
    });
});

/*marker three*/


$(function() {  
    $('.three').click(function(){
    clearSelection();
    addSelection('three')
    });
});

/*marker four*/


$(function() {  
    $('.four').click(function(){
    clearSelection();
    addSelection('four')
    });
});

/*marker five*/


$(function() {  
    $('.five').click(function(){
    clearSelection();
    addSelection('five')
    });
});

/*marker six*/


$(function() {  
    $('.six').click(function(){
    clearSelection();
    addSelection('six')
    });
});

/*marker seven*/


$(function() {  
    $('.seven').click(function(){
    clearSelection();
    addSelection('seven')
    });
});

/*marker eight*/


$(function() {  
    $('.eight').click(function(){
    clearSelection();
    addSelection('eight')
    });
});

/*marker nine*/


$(function() {  
    $('.nine').click(function(){
    clearSelection();
    addSelection('nine')
    });
});

