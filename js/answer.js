var pm = pm || {};
pm.answer = pm.answer || {};

(function(_){
    _.editor = document.querySelector('.answer');

    _.focusToEditor = function(element){
        _.editor.focus();
    }

    _.reset = function(element){
        _.editor.value = "";
        _.editor.placeholder = "Enterキーでスタート"
    }

    _.init = function(element){
        _.editor.value = "";
        _.editor.placeholder = "Enterキーで解答"
    }

    _.finish = function(element){
        _.editor.placeholder = ".キーでリセット"
    }

})(pm.answer);