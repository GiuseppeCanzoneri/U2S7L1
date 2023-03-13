class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAge(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  const Mario = new User("Mario", "Rossi", 35, "Roma");
  const Luigi = new User("Luigi", "Bianchi", 36, "Milano");
  
  console.log(Mario.compareAge(Luigi)); // Mario è più giovane di Luigi


  //Esercizio 2
  // Definiamo la classe Pet
class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
  
    // Metodo che restituisce true se due animali condividono lo stesso padrone
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
  }
  
  // Riferimenti agli elementi del DOM
  const petForm = document.getElementById('pet-form');
  const petList = document.getElementById('pet-list');
  
  // Aggiungiamo un event listener al form
  petForm.addEventListener('submit', (event) => {
    // Evitiamo il comportamento di default del form
    event.preventDefault();
  
    // Otteniamo i dati inseriti dall'utente
    const petName = event.target.elements.petName.value;
    const ownerName = event.target.elements.ownerName.value;
    const species = event.target.elements.species.value;
    const breed = event.target.elements.breed.value;
  
    // Creiamo un nuovo oggetto Pet
    const newPet = new Pet(petName, ownerName, species, breed);
  
    // Aggiungiamo il nuovo animale alla lista
    const li = document.createElement('li');
    li.textContent = `Nome: ${newPet.petName}, Proprietario: ${newPet.ownerName}, Specie: ${newPet.species}, Razza: ${newPet.breed}`;
    petList.appendChild(li);
  
    // Svuotiamo il form
    event.target.reset();
  });
  
  // Creiamo alcune istanze della classe Pet di esempio
  const pet1 = new Pet('Fido', 'Mario Rossi', 'Cane', 'Labrador');
  const pet2 = new Pet('Micio', 'Luigi Bianchi', 'Gatto', 'Europeo');
  const pet3 = new Pet('Coniglio', 'Mario Rossi', 'Coniglio', 'Nano');
  
  // Verifichiamo se due animali condividono lo stesso padrone
  console.log(pet1.hasSameOwner(pet2)); // false
  console.log(pet1.hasSameOwner(pet3)); // true
  
  
    