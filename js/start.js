var problem = problem || {};
problem.dom = problem.dom || {};
problem.dom.start = problem.dom.start || {};

(function(_){
    _.element = document.querySelector('.start');

    _.isStartButton = function(element){
        return element.classList.contains('start');
    };

    _.start = function(element){
        window.alert("Hello");
    };

})(problem.dom.start);