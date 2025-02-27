(() => {
    const $counter = document.getElementById("js-counter");
    const $buttons = document.getElementsByClassName("js-button");

    let intervalId = null;
    let currentCount = 0;
    let timerId = null;

    const updateCounter = (value) => {
        currentCount += value;
        $counter.textContent = currentCount;
    };
    
    const startCounting = (value) => {
        updateCounter(value);
        intervalId = setInterval(() => {
            updateCounter(value);
        }, 100); // 100ミリ秒ごとにカウントを増減
    };
    
    const stopCounting = () => {
        clearInterval(intervalId);
        intervalId = null;
    };

    for (let i = 0; i < $buttons.length; i++) {
        const $button = $buttons[i];
        const value = $button.textContent === "+1" ? 1 : -1;

        $button.addEventListener("mousedown", () => {
            timerId = setTimeout(() => {
                startCounting(value);
            }, 300); // 300ミリ秒後に長押しと判定
        });

        $button.addEventListener("mouseup", () => {
            clearTimeout(timerId);
            if (intervalId) {
                stopCounting();
            } else {
                updateCounter(value); // クリックの場合、一度だけカウントを増減
            }
        });

        $button.addEventListener("mouseleave", () => {
            clearTimeout(timerId);
            stopCounting();
        });
    }
    
    window.resetCounter = () => {
        currentCount = 0;
    };
})();