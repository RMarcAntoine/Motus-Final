import { testDictionary, realDictionary } from './dictionary.js';

console.log('test dictionary:', testDictionary);

const dictionary = realDictionary;
const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
    grid: Array(6)
        .fill()
        .map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
}

function drawGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';

    const wordLength = state.secret.length;
    grid.style.gridTemplateColumns = `repeat(${wordLength}, auto)`;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < wordLength; j++) {
            drawBox(grid, i, j);
        }
    }

    container.appendChild(grid);
}

function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
        for (let j = 0; j < state.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = state.grid[i][j];
        }
    }
}

function registerKeyboardEvents() {
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const pressedKey = key.dataset.key;

            if (pressedKey === 'Enter') {
                handleEnterKey();
            } else if (pressedKey === 'Backspace') {
                handleBackspaceKey();
            } else {
                handleLetterKey(pressedKey);
            }

            updateGrid();
        });
    });

    document.addEventListener('keydown', e => {
        const key = e.key;

        if (key === 'Enter') {
            handleEnterKey();
        } else if (key === 'Backspace') {
            handleBackspaceKey();
        } else if (isLetter(key)) {
            handleLetterKey(key.toLowerCase());
        }

        updateGrid();
    });
}

function handleEnterKey() {
    if (state.currentCol === state.secret.length) {
        const word = getCurrentWord();
        if (isWordValid(word)) {
            revealWord(word);
            state.currentRow++;
            state.currentCol = 0;
        } else {
            const invalidMessage = document.getElementById('WorldinvalidMessag');
            invalidMessage.textContent = 'Ce n\'est pas un mot valide.';
            invalidMessage.classList.remove('hidden');
            setTimeout(() => {
                invalidMessage.classList.add('hidden');
            }, 3000);
        }
    }
}

function handleBackspaceKey() {
    removeLetter();
}

function handleLetterKey(letter) {
    if (isLetter(letter)) {
        addLetter(letter);
    }
}

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.textContent = letter;
    box.id = `box${row}${col}`;

    container.appendChild(box);
    return box;
}

function getCurrentWord() {
    return state.grid[state.currentRow].slice(0, state.currentCol).join('');
}

function isWordValid(word) {
    return dictionary.includes(word);
}

function getNumOfOccurrencesInWord(word, letter) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            result++;
        }
    }
    return result;
}

function getPositionOfOccurrence(word, letter, position) {
    let result = 0;
    for (let i = 0; i <= position; i++) {
        if (word[i] === letter) {
            result++;
        }
    }
    return result;
}

function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500;
    const secretFrequency = {};

    const secretLowerCase = state.secret.toLowerCase();
    const guessLowerCase = guess.toLowerCase();

    for (let i = 0; i < secretLowerCase.length; i++) {
        const letter = secretLowerCase[i];
        if (secretFrequency[letter]) {
            secretFrequency[letter]++;
        } else {
            secretFrequency[letter] = 1;
        }
    }

    for (let i = 0; i < secretLowerCase.length; i++) {
        const box = document.getElementById(`box${row}${i}`);
        const letter = box.textContent.toLowerCase();
        const numOfOccurrencesSecret = secretFrequency[letter];
        const numOfOccurrencesGuess = getNumOfOccurrencesInWord(guessLowerCase, letter);
        const letterPosition = getPositionOfOccurrence(guessLowerCase, letter, i);

        setTimeout(() => {
            if (
                numOfOccurrencesGuess > numOfOccurrencesSecret &&
                letterPosition > numOfOccurrencesSecret
            ) {
                box.classList.add('empty');
            } else {
                if (letter === secretLowerCase[i]) {
                    box.classList.add('right');
                } else if (secretLowerCase.includes(letter)) {
                    box.classList.add('wrong');
                } else {
                    box.classList.add('empty');
                }
            }
        }, ((i + 1) * animation_duration) / 2);

        box.classList.add('animated');
        box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }

    const isWinner = secretLowerCase === guessLowerCase;
    const isGameOver = state.currentRow === 5;

    setTimeout(() => {
        if (isWinner) {
            const winnerMessage = document.getElementById('winnerMessage');
            winnerMessage.textContent =
                'Bravo, Félicitations ! Tu es un génie, le soleil du vieux port de Marseille !';
            winnerMessage.classList.remove('hidden');
        } else if (isGameOver) {
            const gameOverMessage = document.getElementById('gameOverMessage');
            gameOverMessage.textContent = `Non Non Non, c'est perdu ! Le mot était ${state.secret}.`;
            gameOverMessage.classList.remove('hidden');
        }
    }, 3 * animation_duration);
}



function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(letter) {
    if (state.currentCol === state.secret.length) return;
    state.grid[state.currentRow][state.currentCol] = letter;

    if (state.currentCol === 1) {
        state.grid[state.currentRow][0] = state.secret[0];
    }

    state.currentCol++;
}

function removeLetter() {
    if (state.currentCol === 0) return;

    if (state.currentCol === 1) {
        state.grid[state.currentRow][0] = state.secret[0];
    } else {
        state.grid[state.currentRow][state.currentCol - 1] = '';
    }

    state.currentCol--;
}

function startup() {
    const game = document.getElementById('game');
    drawGrid(game);

    registerKeyboardEvents();

    console.log(state.secret)

    const firstLetterBox = document.getElementById('box00');
    firstLetterBox.textContent = state.secret[0];
}

startup();
