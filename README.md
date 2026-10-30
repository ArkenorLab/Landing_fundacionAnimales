# 🐾 Landing Page - Fundación de Rescate y Adopción Animal

Plantilla de landing page moderna, altamente emotiva y optimizada para **Mobile-First** y **SEO Local**, diseñada para fundaciones y organizaciones de rescate animal dedicadas a promover la adopción responsable de perros y gatos, captación de donaciones y programas de hogar de paso.

---

## 🎨 Paleta de Colores

* **Color Primario / Acento:** Rosa Fucsia vibrante (`#FF2A85` y hover `#E0176F`) para llamadas a la acción (CTA), insignias y elementos interactivos.
* **Color de Fondo Principal:** Crema suave / Beige cálido (`#FDFBF7` y `#F7F3EC`) con acentos en tonos pasteles (`#FFF0F5`, `#FCE7F3`).
* **Color de Texto y Estructura:** Marrón oscuro / Gris cálido (`#4A3B32`, `#7D6B5D`, `#2E221B`) para una lectura cálida, empática y con alto contraste accesible.

---

## 📁 Estructura del Proyecto

```text
├── index.html               # Estructura semántica, metadatos y componentes principales
├── README.md                # Documentación técnica y guía de personalización
├── .gitignore               # Exclusiones estándar de Git
└── assets/
    ├── css/
    │   └── styles.css       # Estilos, efectos de interacción y tipografía
    └── js/
        ├── pets-data.js     # Base de datos editable de animales disponibles para adopción
        └── app.js           # Filtros de galería, modal dinámico y enlaces de contacto
```

---

## 🌟 Características Técnicas & de Experiencia de Usuario (UI/UX)

### 1. Secciones Principales
1. **Header Flotante:** Barra de navegación accesible, enlaces rápidos y llamada directa a adopción.
2. **Hero Emotivo:** Encabezado de alto impacto visual y emocional con llamado a la acción doble (adopción y voluntariado / donaciones).
3. **Galería Dinámica de Animales:**
   - Filtros instantáneos en JavaScript: **Todos**, **Perritos** y **Gatitos**.
   - Tarjetas informativas con fotografía, edad, características y estado de salud (Vacunado, Esterilizado).
   - Modal interactivo con la historia detallada de cada rescatado.
4. **Proceso de Adopción Paso a Paso:** Guía visual intuitiva de las etapas de postulación, entrevista y entrega responsable.
5. **Módulo de Donaciones & Apoyo:** Tarjetas para donaciones directas (transferencias y medios digitales con copiado en 1 clic).
6. **Historias de Éxito:** Testimonios con fotografías de casos reales adoptados.
7. **Formulario de Postulación & Contacto:** Integración directa con canales de mensajería (WhatsApp, correo electrónico).

---

## 🐶 Cómo Personalizar la Lista de Mascotas

Abre el archivo [assets/js/pets-data.js](file:///c:/Users/jorgea-hn/Desktop/LandingPages/huellitas-callejeras-barranquilla/assets/js/pets-data.js) y agrega o modifica los objetos en el array `PETS_DATA`:

```javascript
{
  id: "ejemplo-1",
  name: "Nombre del Peludo",
  type: "perro", // o "gato"
  gender: "Macho", // o "Hembra"
  age: "1 año",
  size: "Mediano",
  locationRescued: "Zona de rescate",
  image: "URL_DE_LA_FOTO",
  story: "Breve historia del rescate...",
  tags: ["Cariñoso", "Sociable", "Tranquilo"],
  health: ["Esterilizado", "Vacunado", "Desparasitado"],
  idealHome: "Requisitos recomendados para su nuevo hogar."
}
```

La galería y el formulario consumen estos datos automáticamente.

---

## 💻 Ejecución Local

1. Puedes abrir directamente el archivo [index.html](file:///c:/Users/jorgea-hn/Desktop/LandingPages/huellitas-callejeras-barranquilla/index.html) en tu navegador preferido.
2. O iniciar un servidor local:
   ```bash
   node server.js
   ```
