(() => {
    const $counter = document.getElementById("js-counter");
    const $resetButton = document.getElementById("js-reset-button");

   

    const clickHandler = () => {
        $counter.textContent = 0;
        window.resetCounter();
    };

    $resetButton.addEventListener("click", clickHandler);

})();