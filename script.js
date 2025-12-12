function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const circle_1 = document.querySelector('.circle-1');
const exerciseText_1 = document.querySelector('.text-1')
const circle_2 = document.querySelector('.circle-2');
const exerciseText_2 = document.querySelector('.text-2')

async function exercise_1() {
    for (let i = 0; i < 9999; i++) {
        exerciseText_1.textContent = 'Вдох'
        await sleep(4000);
        circle_1.style.animationPlayState = 'paused';
        exerciseText_1.textContent = 'Задержите дыхание'
        await sleep(2000);
        circle_1.style.animationPlayState = 'running';
        exerciseText_1.textContent = 'Выдох'
        await sleep(6000);
    }
}
exercise_1();

async function exercise_2() {
    for (let i = 0; i < 9999; i++) {
        exerciseText_2.textContent = 'Вдох'
        await sleep(4000);
        circle_2.style.animationPlayState = 'paused';
        exerciseText_2.textContent = 'Задержите дыхание'
        await sleep(7000);
        circle_2.style.animationPlayState = 'running';
        exerciseText_2.textContent = 'Выдох'
        await sleep(8000);
    }
}
exercise_2();
