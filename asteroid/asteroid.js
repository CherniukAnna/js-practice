/*
Завдання:
В деякій частині космосу є нерухомо розташований астероїд з унікальним мінералом. Для
його точного знаходження був розроблений новий тип простих одноразових зондів, які під
час активації один раз визначають точну відстань від себе до астероїда.
Необхідно написати функцію, яка задаватиме координати активації зондам і, отримуючи
відстані від кожного з них до астероїда, знайде координати астероїда, витративши
найменшу кількість зондів.
Для спрощення задачі припустимо, що частина космосу, в якій розташований рідкісний
астероїд та можуть бути запущені зонди, обмежена уявним кубом розміром 100x100x100.
А координати астероїда і зондів можуть бути лише цілими числами від 0 до 100.
Вхідні параметри:
Для вибору координат астероїда необхідно написати функцію, яка згенерує випадкове
місцезнаходження астероїда a(x, y, z). Також необхідно підготувати окрему функцію, яка,
отримавши координати зонда, буде повертати відстань між ним та точкою a.
Вихідні дані:
Як результат програма повинна повернути координати астероїда (location), кількість
використаних зондів (probes.count) та їх координати (probes.coordinates):
{"result": {
"location": {"x":34, "y": 50, "z": 60},
"probes": {
"count": 44,
"coordinates": [{"x": 10, "y": 9, "z": 21}, ..., {"x": 10, "y": 4, "z": 11}]
}
}}
*/




function generateLocationAsteroid() {
    const x = Math.floor(Math.random() * 101);
    const y = Math.floor(Math.random() * 101);
    const z = Math.floor(Math.random() * 101);

    return { x, y, z }
    
}

console.log(generateLocationAsteroid());


function calcDistance(ambDistance, locationAsteroid) {
    const xDistance = ambDistance.x - locationAsteroid.x;
    const yDistance = ambDistance.y - locationAsteroid.y;
    const zDistance = ambDistance.z - locationAsteroid.z;
}

function findAsteroid() {
    const locationAsteroid = generateLocationAsteroid();
    const ambDistance = [];
    const countProbes = 44
}

