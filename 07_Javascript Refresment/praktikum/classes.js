class Person {
    constructor(name, age) {
        // Inisialisasi properti name dan age
        this.name = name;
        this.age = age;
    }

    introduce() {
        // Mencetak pesan memperkenalkan orang tersebut
        console.log(`Halo, saya adalah ${this.name} yang berusia ${this.age} tahun.`);
    }
}

// Contoh penggunaan:
const person = new Person("Rizki", 21);
person.introduce();
