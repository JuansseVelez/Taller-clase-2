# Taller de JavaScript y Git

Proyecto de práctica para aprender JavaScript y control de versiones con Git.


## 📋 Descripción

Este repositorio contiene ejercicios prácticos de programación en JavaScript y el uso de Git para control de versiones.

## 🗂️ Estructura del Proyecto
```
taller-javascript/
├── ejercicios/          # Ejercicios básicos de JavaScript
│   ├── portada.md
│   ├── saludo.js
│   ├── notas.js
│   ├── pares-impares.js
│   └── verificar-numero.js
├── features/            # Nuevas funcionalidades
│   └── calculator.js
├── utils/               # Utilidades y validaciones
│   └── validation.js
└── services/            # Servicios (próximamente)
```

## Uso

### Ejecutar ejercicios individuales
```bash
# Navegar a la carpeta de ejercicios
cd ejercicios

# Ejecutar un archivo
node saludo.js
node notas.js
node pares-impares.js
node verificar-numero.js
```

### Usar la calculadora
```bash
cd features
node calculator.js
```

### Validar datos
```bash
cd utils
node validation.js
```

## 📝 Ejemplos

### Calculadora
```javascript
const { sum, subtract } = require('./features/calculator');

console.log(sum(5, 3));       // 8
console.log(subtract(10, 4)); // 6
```

### Validación de Email
```javascript
const { validateEmail } = require('./utils/validation');

console.log(validateEmail('test@example.com')); // true
console.log(validateEmail('invalid'));           // false
```

## 🛠️ Tecnologías

- JavaScript (Node.js)
- Git & GitHub
- Markdown

## 👨‍💻 Autor

Juan Sebastian Ramirez Velez

## 📅 Fecha

08 de Noviembre del 2025