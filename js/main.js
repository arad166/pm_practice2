(function(){
    problem.dom.start.element.addEventListener('click',onStartClick);

    function onStartClick(event){
        if(problem.dom.start.isStartButton(event.target)){
            onStartButtonClick(event);
        }
    }

    function onStartButtonClick(event){
        problem.dom.start.start(event.target);
    }
})();