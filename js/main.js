(function(){
    pm.dom.start.element.addEventListener('click',onStartClick);

    function onStartClick(event){
        if(pm.dom.start.isStartButton(event.target)){
            onStartButtonClick(event);
        }
    }

    function onStartButtonClick(event){
        pm.dom.problem.init(event.target);
        pm.dom.start.start(event.target);
    }
})();