var pm = pm || {};
pm.start = pm.start || {};

(function(_){
    _.element = document.querySelector('.start');

    _.isStartButton = function(element){
        return element.classList.contains('start');
    };

})(pm.start);