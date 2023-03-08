var pm = pm || {};
pm.problem = pm.problem || {};

(function(_){
    _.problem = document.querySelector('.problem');

    _.init = function(element){
        _.problem.textContent = "ここに問題が表示されます";
    }

    _.viewProblem = function(x,y,t){
        var prob = "";
        if(x > 0){
            prob += '(+'+x+')';
        } else if(x < 0){
            prob += '('+x+')';
        } else {
            prob += '0';
        }
        if(t == 0){
            prob += '+';
        } else {
            prob += '-';
        }
        if(y > 0){
            prob += '(+'+y+')';
        } else if(y < 0){
            prob += '('+y+')';
        } else {
            prob += '0';
        }
        _.problem.textContent = prob;
    }

    _.createProblem = function(element){
        let max = 20,min=-20;
        var x = Math.floor(Math.random() * (max - min)) + min
        var y = Math.floor(Math.random() * (max - min)) + min
        var t = Math.floor(Math.random()-0.5);
        _.viewProblem(x,y,t);
        if(t == 0) return x+y;
        else return x-y;
    }
    
})(pm.problem);