# 🎯 Quiz App - ¡Pon a prueba tus conocimientos! 🚀

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-3.0-FFC107?style=for-the-badge&logo=pinia&logoColor=black)

**¿Crees que dominas HTML, CSS, JavaScript y Accesibilidad Web? ¡Demuéstralo!** 💪

</div>

---

## 📚 ¿Qué es esto?

Una aplicación de quiz **súper divertida** y moderna para poner a prueba tus conocimientos de programación web. Con 3 niveles de dificultad por asignatura, ¡prepárate para demostrar que eres un verdadero maestro del código! 🧙‍♂️✨

## 🎮 Características Épicas

- 🎨 **4 Asignaturas**: HTML, CSS, JavaScript y Accesibilidad Web
- 🏆 **3 Niveles**: Básico, Intermedio y Avanzado
- ⏱️ **Temporizador**: 30 minutos para 20 preguntas (¡sin presión! 😅)
- 💡 **Sistema de Pistas**: Porque todos necesitamos ayuda a veces
- 📊 **Estadísticas Detalladas**: Ve exactamente dónde brillaste y dónde... bueno, no tanto
- 🎯 **Barra de Progreso**: Para que sepas cuánto te falta para la gloria
- 🌈 **Diseño Hermoso**: Porque aprender también puede verse bien
- 📱 **100% Responsive**: Estudia desde tu teléfono, tablet o computadora

## 🚀 Instalación Rápida

```bash
# Clona este repositorio (o descárgalo como un ninja 🥷)
git clone https://github.com/DavidCortesA/quiz-app-vue.git

# Entra a la cueva del proyecto
cd quiz-app

# Instala las dependencias (ve por un café ☕, esto toma un momento)
npm install

# ¡Lanza la aplicación! 🎉
npm run dev
```

## 📁 Estructura del Proyecto (El Mapa del Tesoro)

```
quiz-app/
├── 📂 public/
│   └── 📂 data/               # 🗄️ Aquí viven tus preguntas
│       ├── html.json          # 🟠 Preguntas de HTML
│       ├── css.json           # 🔵 Preguntas de CSS
│       ├── js.json            # 🟡 Preguntas de JavaScript
│       └── accesibilidad.json # 🟢 Preguntas de Accesibilidad
│
├── 📂 src/
│   ├── 📂 components/         # 🧩 Los bloques de construcción
│   │   ├── SubjectSelection.vue    # 🎯 Elige tu destino
│   │   ├── LevelSelection.vue      # 🎚️ Escoge tu nivel
│   │   ├── QuizQuestion.vue        # ❓ La zona de batalla
│   │   └── QuizResults.vue         # 🏆 El momento de la verdad
│   │
│   ├── 📂 stores/
│   │   └── quizStore.ts       # 🧠 El cerebro de la operación
│   │
│   ├── App.vue                # 🏠 El hogar dulce hogar
│   ├── main.ts                # 🚪 La puerta de entrada
│   └── style.css              # 💅 El maquillaje
│
└── package.json               # 📦 La lista de deseos
```

## 🎨 Cómo Crear tus Preguntas

Crea archivos JSON en `public/data/` siguiendo este formato mágico:

```json
{
  "questions": {
    "level_1": [
      {
        "question": "¿Cuál es la respuesta a la vida, el universo y todo lo demás? 🤔",
        "options": [
          "42",
          "Vue.js",
          "Café",
          "Pizza"
        ],
        "answer": "42",
        "hint": "Es un número... y también una película 🎬"
      }
    ],
    "level_2": [ /* ... 20 preguntas más difíciles ... */ ],
    "level_3": [ /* ... 20 preguntas MEGA difíciles ... */ ]
  }
}
```

### 📋 Reglas de Oro:

- ✅ **20 preguntas por nivel** (ni una más, ni una menos)
- ✅ **4 opciones de respuesta** (3 incorrectas + 1 correcta)
- ✅ **Una pista útil** (pero no demasiado obvia 😉)
- ✅ **Nombres de archivo**: `html.json`, `css.json`, `js.json`, `accesibilidad.json`

## 🎯 Cómo Jugar

1. **Selecciona tu asignatura** 📚
   - ¿HTML? ¿CSS? ¿JavaScript? ¿Accesibilidad? ¡Tú decides!

2. **Elige tu nivel** 🎚️
   - 🟢 Básico: Para calentar motores
   - 🟡 Intermedio: Aquí la cosa se pone seria
   - 🔴 Avanzado: Solo para los valientes

3. **¡A jugar!** 🎮
   - Lee la pregunta (obvio 😄)
   - ¿Atascado? Usa la pista 💡
   - Selecciona tu respuesta
   - Presiona "Siguiente" y repite

4. **Revisa tus resultados** 📊
   - Ve tu puntuación
   - Analiza tus respuestas
   - ¡Presume con tus amigos si sacaste 100%!

## 🛠️ Scripts Disponibles

```bash
npm run dev        # 🔥 Modo desarrollo (con hot reload)
npm run build      # 📦 Construir para producción
npm run preview    # 👀 Vista previa de producción
npm run type-check # 🔍 Verificar tipos de TypeScript
npm run lint       # 🧹 Limpiar y arreglar código
npm run format     # 💅 Formatear código bonito
```

## 🎨 Tecnologías Usadas

- **Vue 3** - El framework progresivo que todos aman 💚
- **TypeScript** - Porque los tipos son nuestros amigos 🤝
- **Pinia** - El estado más moderno de Vue 🍍
- **Tailwind CSS** - CSS sin dolor de cabeza 🎨
- **Vite** - Velocidad de construcción supersónica ⚡
- **Lucide Icons** - Iconos hermosos para todo 🎭

## 🌟 Características Pro

- ⏰ **Temporizador en tiempo real** que te mantiene alerta
- 📈 **Barra de progreso animada** para motivarte
- 💾 **Resultados detallados** con análisis completo
- 🎯 **Sistema de puntuación** en porcentaje
- ⏱️ **Tracking de tiempo** por pregunta
- 🎨 **UI/UX moderno** y súper intuitivo
- 📱 **Diseño responsive** que se ve bien en todos lados

## 🚀 Ideas para el Futuro

- [ ] 💾 Guardar progreso en localStorage
- [ ] 📊 Gráficos de estadísticas con Chart.js
- [ ] 🏅 Sistema de logros y badges
- [ ] 🌙 Modo oscuro (para los vampiros del código)
- [ ] 🔊 Efectos de sonido (pew pew! 🎵)
- [ ] 👥 Modo multijugador
- [ ] 📱 PWA (¡instálalo en tu teléfono!)
- [ ] 🌍 Internacionalización (i18n)
- [ ] 📤 Compartir resultados en redes sociales

## 🤝 Contribuciones

¿Tienes ideas locas? ¿Encontraste un bug? ¿Quieres agregar más preguntas?

**¡Las contribuciones son bienvenidas!** 🎉

1. Fork el proyecto 🍴
2. Crea tu rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request 🎁

## 📝 Licencia

Este proyecto está bajo la licencia MIT - siéntete libre de usarlo como quieras 🆓

## 💬 Contacto

¿Preguntas? ¿Sugerencias? ¿Solo quieres charlar sobre código?

**¡Abre un issue y hablemos!** 💬

---

<div align="center">

**Hecho con ❤️, ☕ y mucho código**

¿Te gustó? ¡Dale una ⭐ al repo!

**¡Ahora ve y demuestra tus conocimientos!** 🚀

</div>

---

## 🎓 Bonus: Consejos para Obtener 100%

1. 🧘 Mantén la calma (el pánico no ayuda)
2. 📖 Lee las preguntas completas (están ahí por algo)
3. 💡 Usa las pistas sabiamente
4. ⏰ Administra tu tiempo (30 minutos vuelan)
5. 🤔 Piensa antes de responder
6. 🔁 Si no sabes, ¡intenta de nuevo!
7. ☕ Ten café/té cerca (hidratación = concentración)
8. 🎵 Música de fondo opcional (pero ayuda)

---

**P.D.**: Si lograste 100% en nivel avanzado, oficialmente eres un 🧙‍♂️ **Mago del Código**
