// Task-1 Форматтер чисел
function parseCount(productUnits) {
    const count = Number.parseFloat(productUnits);
    if(Number.isNaN(count)) {
        throw new Error("Невалидное значение");
    }
    return count;
}

function validateCount(productUnits) {
    let validatedCount;
    try {
        validatedCount = parseCount(productUnits);
    } catch (error) {
        return error;
    }
    console.log(validatedCount)
    return validatedCount;
}

// Task-2 Треугольник
class Triangle {
    constructor(a, b, c) {
        if(a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}