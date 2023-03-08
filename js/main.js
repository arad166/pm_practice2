(function(){
    pm.start.element.addEventListener('click',onStartClick);
    pm.answer.editor.addEventListener('keydown',onKeydown);

    function onStartClick(event){
        if(pm.start.isStartButton(event.target)){
            onStartButtonClick(event);
        }
    }

    function onStartButtonClick(event){
        pm.problem.init("ここに問題が表示されます");
        run(event);
    }

    function onKeydown(event,ans){
        if(event.keyCode !== 13){
            return false;
        }
        var res = false;
        if(ans === pm.answer.editor.value-0){
            res = true;
        }
        pm.answer.editor.value = "";
        return res;
    }

    function run(event){
        pm.answer.focusToEditor(event.target);
        for(var i = 0;i < 5;i++){
            var ans = pm.problem.createProblem(event.target);
        }
    }

})();