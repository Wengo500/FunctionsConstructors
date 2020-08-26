const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
};

const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
};

const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
};

const levels = {
    one: 'Red',
    two: 'Yellow',
    three: 'Green',
    four: '80 level',
};

const offenses = {
    lateness: 'lateness',
    violationOfTheDressCode: 'violation of the dress code',
    noise: 'noise',
    skippingWork: 'skipping work',

};

const offenseFine = {
    [offenses.lateness]: 200,
    [offenses.violationOfTheDressCode]: 150,
    [offenses.noise]: 99,
    [offenses.skippingWork]: 500,
};

function User(name, language, grade = grades.Junior, level = levels.one) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.finTasks = 0;
    this.level = level;


    this.addTask = () => {
        this.tasks++;

    };

    this.fine = (n) => {
        this.salary = this.salary - offenseFine[n];
    };

    this.finishTasks = () => {
        if (this.tasks > 0) {
            this.tasks--;
            this.salary += (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
            this.finTasks++;

        };
    };

    this.upgrade = () => {
        if (this.finTasks > 0 && this.finTasks < 2) {
            console.log(this.name + ' does not have enough finish tasks for level "Yellow"')
        }
        if (this.finTasks >= 2) {
            this.level = levels.two;
        };
        if (this.finTasks > 3 && this.finTasks < 4) {
            console.log(this.name + ' does not have enough finish tasks for level "Green"')
        }
        if (this.finTasks >= 4) {
            this.level = levels.three;
        };
        if (this.finTasks > 4 && this.finTasks < 6) {
            console.log(this.name + ' does not have enough finish tasks for level "80 level"')
        }
        if (this.finTasks >= 6) {
            this.level = levels.four;
        };
        if (this.finTasks > 6) {
            console.log(this.name + ' 80 level is maximum')
        };
    };

};

const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);

user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();

user1.addTask();

user.finishTasks();
user.finishTasks();
user.finishTasks();
user.finishTasks();
user.finishTasks();
user.finishTasks();
user.finishTasks();

user1.finishTasks();

user.upgrade();
user1.upgrade();
user2.upgrade();

user.fine();

console.log(user);
console.log(user1);
console.log(user2);