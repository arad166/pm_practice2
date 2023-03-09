var pm = pm || {};
pm.timer = pm.timer || {};

(function(_){
    _.timer = document.querySelector('.timer');

    var stopwatch;
	var startTime;
	var elapsedTime = 0;

    _.start = function(){
        if (stopwatch) return;
        startTime = new Date().getTime();
        stopwatch = setInterval(_.update, 10);
    }

    _.stop = function(){
        if (!stopwatch) return;
        clearInterval(stopwatch);
        elapsedTime += new Date().getTime() - startTime;
        stopwatch = null;
    }

    _.reset = function() {
        _.stop();
        elapsedTime = 0;
        _.timer.textContent = "00:00:00";
    }

    _.update = function() {
        var currentTime = new Date().getTime();
        var elapsed = new Date(currentTime - startTime + elapsedTime);
        var minutes = _.padZero(elapsed.getMinutes());
        var seconds = _.padZero(elapsed.getSeconds());
        var milliseconds = _.padZero(Math.floor(elapsed.getMilliseconds() / 10));
        _.timer.textContent = minutes + ":" + seconds + ":" + milliseconds;
    }

    _.padZero = function(num) {
        if (num < 10) return "0" + num;
        return num;
    }


})(pm.timer);