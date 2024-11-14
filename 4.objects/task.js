function Student(name, gender, age) {
    this.marks = [];
    this.name = name;
    this.gender = gender;
    this.age = age;
}

// устанавливает поле предмет
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// добавляет несколько оценок
Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    }
}

// возвращает среднее арифметическое оценок
Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
}

// исключает студента и устанавливает причину
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}