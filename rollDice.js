setTimeout(() => {
    console.log(`Your time is up!`);
    clearInterval(stopRoll);
}, 6000);

let stopRoll = setInterval(() => {
    let roll = () => {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(`You rolled: ${randomNumber}`);
    };

    roll();
}, 1000);
