const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº:${order.address.number}, AP:${order.address.apartment}.`
}

console.log(customerInfo(order));

// const orderModifier = (order) => {
//   Object.order.order.delivery.deliveryPerson.values = 'Luiz Silva'


// }

orderModifier(order);

// -----------------------------------------------------> Parte 2
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// EX 1
const modifyLesson2 = (obj, key, value) => {
  obj[key] = value;
}

modifyLesson2(lesson2, 'turno', 'noite');
console.log(lesson2)

// Ex 2

const getKeys = (obj) => Object.keys(obj);
console.log(getKeys(lesson3));

// Ex 3

const objectLength = (obj) => Object.keys(obj).length;
console.log(objectLength(lesson3));

// Ex 4

const objectValues = (obj) => Object.values(obj);
console.log(objectValues(lesson2));

// Ex 5

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
