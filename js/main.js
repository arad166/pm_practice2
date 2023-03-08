(function(){
    pm.dom.start.element.addEventListener('click',onStartClick);
    pm.dom.answer.element.addEventListener('keydown',onKeydown);

    function onStartClick(event){
        if(pm.dom.start.isStartButton(event.target)){
            onStartButtonClick(event);
        }
    }

    function onStartButtonClick(event){
        pm.dom.problem.init("ここに問題が表示されます");
        run(event);
    }

    function run(event){
        for(var i = 0;i < 5;i++){
            var ans = pm.dom.problem.createProblem(event.target);
            while(true){
                
            }
        }
    }

})();