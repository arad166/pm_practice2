var pm = pm || {};
pm.dom = pm.dom || {};
pm.dom.start = pm.dom.start || {};

(function(_){
    _.element = document.querySelector('.start');

    _.isStartButton = function(element){
        return element.classList.contains('start');
    };

})(pm.dom.start);