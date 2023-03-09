(function(){
    pm.answer.editor.addEventListener('keydown',onKeydown);
    document.addEventListener('keyup',onResetKeyup);

    var problemCount = document.querySelector('.count')

    var ans = 100;
    var correctCount = 0;
    var solving = true;

    function onKeydown(event){
        if(event.keyCode !== 13){
            return;
        }
        if(!solving){
            return;
        }
        if(ans === 100){
            ans = pm.problem.createProblem(event.target);
            pm.answer.init(event.target);
            pm.timer.start();
            return;
        }
        if(ans === pm.answer.editor.value-0){
            correctCount++;
            problemCount.textContent = "あと"+(5-correctCount)+"問!"
            ans = pm.problem.createProblem(event.target);
        }
        pm.answer.init(event.target);
        if(correctCount === 5){
            finish(event);
        }
    }

    function onResetKeyup(event){
        if(event.keyCode !== 190){
            return;
        }
        reset(event);
    }

    function reset(event){
        ans = 100;
        correctCount = 0;
        pm.problem.reset(event.target);
        pm.answer.reset(event.target);
        pm.timer.reset();
        problemCount = "あと5問!";
        solving = true;
    }

    function finish(event){
        pm.problem.finish(event.target);
        pm.answer.finish(event.target);
        pm.timer.stop();
        solving = false;
    }

})();