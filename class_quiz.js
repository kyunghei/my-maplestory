var form = document.getElementById('class-quiz');

form.addEventListener('submit', function (event) {
    // prevents the form from autosubmitting
    event.preventDefault()

    // displays the pop up window with results
    var popWindow = document.getElementById('pop-up');
    popWindow.classList.add("makeVisible");

    //calculate the quiz scores
    var thief = 0;
    var archer = 0;
    var mage = 0;
    var warrior = 0;

    for (let loop = 1; loop < 11; loop++) {
        var answer = document.querySelector(`input[name='q${loop}']:checked`).value;
        if (answer == 'thief') {
            thief++;
        } else if (answer == 'archer') {
            archer++;
        } else if (answer == 'mage') {
            mage++;
        } else {
            warrior++;
        }
    }


    if (thief == maxNum) {
        classResult = 'Thief';
        classMessage = 'You are crafty and thrive on agility and stealth to make your way through challenges.';
    } else if (archer == maxNum) {
        classResult = 'Archer';
        classMessage = 'You are independent and have a profound bond with nature and its elements.'
    } else if (mage == maxNum) {
        classResult = 'Mage';
        classMessage = 'You are wise and possess a deep connection to mystic forces and the unknown.'
    } else {
        classResult = 'Warrior';
        classMessage = 'You are a fearless hero, always ready to face danger head-on.'
    }
    var maxNum = (Math.max(thief, archer, mage, warrior));

    // Add results to the pop up window
    var resultContent = document.getElementById("result-content");
    var result = document.createElement('p');
    result.id = "classResult";
    result.textContent = `You are destined to be a ${classResult}!`;
    var resultMessage = document.createElement('p');
    resultMessage.id = "resultMessage";
    resultMessage.textContent = classMessage;
    resultContent.appendChild(result);
    resultContent.appendChild(resultMessage);

})

var closePopup = document.getElementById('close-box');
closePopup.addEventListener("click", function (event) {
    var popWindow = document.getElementById('pop-up');
    popWindow.classList.remove('makeVisible');

    var resultContent = document.getElementById("result-content");
    resultContent.removeChild(document.getElementById('classResult'));
    resultContent.removeChild(document.getElementById('resultMessage'));

})
