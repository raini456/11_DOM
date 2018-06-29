(function () {
    var element, headline, subheadline, elementsAll, pictures;
    var softWarning = 'fuchsia';
    var lightSuccess = 'green';
    var bigWarning = 'red';
    colorsAll=[softWarning, lightSuccess, bigWarning];
    function init() {
        pictures = document.querySelectorAll('img');
        for (var i = 0; i < pictures.length; i++) {
//            pictures[i].onclick = function () {
//                this.style.display = 'none';
//            };
             pictures[i].onclick=imgOff;
        }
        console.log(pictures);
        elementsAll = document.querySelectorAll('p, h2, h3');
        element = document.querySelector('p');
        headline = document.querySelector('h2');
        subheadline = document.querySelector('h3');
//        changeColor(headline, softWarning);
//        changeColor(element, lightSuccess)
        //changeColor([element, headline, subheadline], [softWarning, lightSuccess,bigWarning]);
        changeColor(elementsAll, colorsAll);
        subheadline.addEventListener('click', changeColor2);
        headline.addEventListener('click', function (e) {
            document.getElementById('textContainer').innerHTML = "Hallo";
            this.innerHTML = "Changed";
        });

//        for(var i=0; i<pictures.length;i++){           
//           pictures[i].addEventlistener('click', function(){
//               this.style.display='none';
//           });
//        }       

        //element = document.querySelectorAll('p'); holt alle <p></p>s
    }

    function imgOff() {
        this.style.display='none';
    }


    function changeColor2() {
        this.style.color = lightSuccess;
    }
    function changeColor(xObject, xColor) {
        if (typeof xObject === 'object' && xObject.length > 0) {//Prüfen, ob Objekt vorhanden und gefüllt ist
            //mit Schleife durchlaufen ...
            var max = xObject.length;
            var min = xColor.length;
            if (max === min) {
                for (var i = 0; i < max; i++) {
                    xObject[i].style.color = xColor[i];
                }
            } else {
                for (var i = 0; i < max; i++) {
                    xObject[i] = xColor[0];
                }
            }
        } else if (typeof xObject === 'object' && xObject.length === 'undefined') {
            xObject.color = lightSuccess;
        }
        //xObject.style.color = xColor;
//        console.log(xObject.length);
        //console.log(typeof xObject);
    }
    /*
     * function isObject(o){
     return o && typeof o == 'object' && o.constructor === Object;
     }
     function isArray(o){
     return o && typeof o == 'object' && o.constructor === Array;
     }
     function changeColor(xObject, xColor) {
     if(isArray(xObject)){//Prüfen, ob Objekt vorhanden und gefüllt ist
     //mit Schleife durchlaufen ...
     var max = xObject.length;
     var min = xColor.length;
     if(max===min){
     for(var i=0; i<max;i++){
     xObject[i].style.color=xColor[i];
     }            
     }
     else{
     for(var i=0; i<max;i++){
     xObject[i]=xColor[0];
     }
     }            
     }
     else if(isArray(xObject)){
     xObject.color=lightSuccess;
     }
     //xObject.style.color = xColor;
     //      //console.log(xObject.length);
     //console.log(typeof xObject);
     }
     */
    window.addEventListener('load', init);
})();