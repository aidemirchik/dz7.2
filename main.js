class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

const today = new Date();
today.setFullYear(today.getFullYear() + 8);

class Student extends User {
    constructor(name, surname, year){
        super(name, surname)
        this.year = +year;
    }

    getFullName() {
		return `И.Ф.: ${this.name + ' ' + this.surname}`; 
	};

    getCourse() {
        return `Курс: ${today.getFullYear() - this.year}`;
    }
}

const student = new Student('Айдемир', 'Рахатбеков', 2027)
console.log(student.getFullName());
console.log(`Год поступления: ${student.year}`);
console.log(`Текущий год: ${today.getFullYear()}`);
console.log(student.getCourse());
