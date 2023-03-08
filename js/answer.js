var pm = pm || {};
pm.answer = pm.answer || {};

(function(_){
    _.editor = document.querySelector('.answer');

    _.focusToEditor = function(element){
        _.editor.focus();
    }

})(pm.answer);