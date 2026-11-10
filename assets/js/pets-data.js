/**
 * DATOS DE PELUDOS EN ADOPCIÓN - FUNDACIÓN ANIMALES BAQ
 * Cada peludo cuenta con historia, edad estimada, temperamento y estado de salud.
 */

const PETS_DATA = [
  {
    id: "milu",
    name: "Milú",
    type: "perro",
    gender: "Macho",
    age: "1 año y medio",
    size: "Mediano (14 kg)",
    locationRescued: "Encontrado en la Vía 40",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
    story: "Milú fue rescatado con desnutrición severa tras días deambulando bajo el sol barranquillero. Hoy es un torbellino de amor que adora los paseos matutinos y dar besitos a quien le hable bonito.",
    tags: ["Juguetón", "Apto para Niños", "Sociable con Perros"],
    health: ["100% Vacunado", "Esterilizado", "Desparasitado"],
    idealHome: "Casas con patio o familias activas que le brinden paseos y mucho juego."
  },
  {
    id: "canela",
    name: "Canela",
    type: "perro",
    gender: "Hembra",
    age: "5 meses",
    size: "Mediana en crecimiento",
    locationRescued: "Rescatada en Barrio El Prado",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop",
    story: "Canela fue hallada en una cajita de cartón junto a sus hermanitos. Es dulce, extremadamente cariñosa y busca unos brazos cálidos donde acurrucarse cada noche.",
    tags: ["Cachorra", "Muy Tierna", "Aprende Rápido"],
    health: ["Esquema de vacunas al día", "Compromiso de esterilización cubierto", "Sana"],
    idealHome: "Apartamento o casa, ideal para personas que buscan una compañera fiel."
  },
  {
    id: "simba",
    name: "Simba",
    type: "gato",
    gender: "Macho",
    age: "8 meses",
    size: "Pequeño / Mediano",
    locationRescued: "Rescatado en Villa Carolina",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop",
    story: "Simba es un gato ronroneador nato. Llegó con una patita lastimada, hoy totalmente recuperada. Es fanático de las siestas al lado de la ventana y de jugar con cordoncitos.",
    tags: ["Super Ronroneador", "Tranquilo", "Limpio"],
    health: ["Esterilizado", "Triple felina al día", "Negativo VIF/FeLV"],
    idealHome: "Apartamentos con mallas de seguridad o casas cerradas y seguras."
  },
  {
    id: "rocky",
    name: "Rocky",
    type: "perro",
    gender: "Macho",
    age: "2 años",
    size: "Grande noble (22 kg)",
    locationRescued: "Rescatado en la Murillo",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop",
    story: "Rocky pasó meses amarrado bajo la lluvia. A pesar de su pasado, no guarda ni una pizca de rencor: es el perro más leal, obediente y protector que podrás conocer.",
    tags: ["Obediente", "Guardián Afectuoso", "Leal"],
    health: ["Esterilizado", "Vacunado contra rabia y séxtuple", "Microchip"],
    idealHome: "Familia que valore la lealtad y tenga espacio para que estire sus patitas."
  },
  {
    id: "luna",
    name: "Luna",
    type: "gato",
    gender: "Hembra",
    age: "1 año",
    size: "Pequeña (3.5 kg)",
    locationRescued: "Rescatada cerca al Gran Malecón",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8dd38782e?q=80&w=800&auto=format&fit=crop",
    story: "Luna tiene unos ojazos que derriten a cualquiera. Es tranquila, prudente y le encanta frotar su cabecita contra tus piernas mientras trabajas en el computador.",
    tags: ["Silenciosa", "Cariñosa", "Compañera de Teletrabajo"],
    health: ["Esterilizada", "Vacunas al día", "Desparasitada"],
    idealHome: "Hogares tranquilos que le den su espacio para adaptarse y llenarla de mimos."
  },
  {
    id: "toby",
    name: "Toby",
    type: "perro",
    gender: "Macho",
    age: "6 años",
    size: "Mediano (15 kg)",
    locationRescued: "Rescatado en el Centro Histórico",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=800&auto=format&fit=crop",
    story: "Toby es un abuelito de alma joven. Tras años de abandono, solo pide un cojín suave, comida rica y una mano amable que le rasque la pancita. Los perros adultos aman el doble.",
    tags: ["Adulto Sabio", "Paseos Cortos", "Paz Total"],
    health: ["Esterilizado", "Chequeo geriátrico al día", "Dentadura limpia"],
    idealHome: "Adultos mayores o personas tranquilas que deseen un compañero de sofá incondicional."
  },
  {
    id: "nube",
    name: "Nube",
    type: "perro",
    gender: "Hembra",
    age: "8 meses",
    size: "Mediana (12 kg)",
    locationRescued: "Rescatada en Barrio Montecito",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop",
    story: "Nube es una perrita blanca y esponjosa como una nube. Llegó temblando de frío en una noche de lluvia. Es muy dulce, sociable con otros perros y ama que le rascen detrás de las orejas.",
    tags: ["Esponjosa", "Dulce", "Sociable"],
    health: ["Esterilizada", "Vacunas al día", "Desparasitada"],
    idealHome: "Familia con niños o persona que le dé mucho cariño y un lugar cálido para dormir."
  },
  {
    id: "thor",
    name: "Thor",
    type: "perro",
    gender: "Macho",
    age: "3 años",
    size: "Grande (25 kg)",
    locationRescued: "Rescatado en Barrio Los Olivos",
    image: "https://images.unsplash.com/photo-1516035060371-86b6981d6302?q=80&w=800&auto=format&fit=crop",
    story: "Thor es un perro fuerte, noble y muy protector. Fue rescatado de una situación de maltrato, pero no guarda rencor. Le encanta caminar, jugar a buscar la pelota y cuidar a su familia.",
    tags: ["Fuerte", "Protectedor", "Obediente"],
    health: ["Esterilizado", "Vacunado contra rabia", "Microchip"],
    idealHome: "Casa con patio seguro y familia activa que disfrute de paseos largos."
  },
  {
    id: "michi",
    name: "Michi",
    type: "gato",
    gender: "Macho",
    age: "1 año",
    size: "Pequeño (4 kg)",
    locationRescued: "Rescatado en Calle 84",
    image: "https://images.unsplash.com/photo-1516323267491-a6b0b3f674b2?q=80&w=800&auto=format&fit=crop",
    story: "Michi es un gatito travieso y curioso. Le encantan las cajas de cartón, los rayos de sol y jugar con cualquier cordel que encuentre. Es muy limpio y ronronea fuerte cuando lo acaricias.",
    tags: ["Travieso", "Curioso", "Limpio"],
    health: ["Esterilizado", "Triple felina al día", "Negativo VIF/FeLV"],
    idealHome: "Apartamento con mallas de seguridad o casa cerrada, sin acceso libre a la calle."
  },
  {
    id: "pelusa",
    name: "Pelusa",
    type: "gato",
    gender: "Hembra",
    age: "9 meses",
    size: "Pequeña (3.2 kg)",
    locationRescued: "Rescatada en Barrio El Prado",
    image: "https://images.unsplash.com/photo-1518791841237-8f84e00b5654?q=80&w=800&auto=format&fit=crop",
    story: "Pelusa es una gatica gris muy tranquila y mimosa. Le encanta dormir sobre el regazo de su humano y mirar por la ventana los pájaros. Es ideal para hogares tranquilos.",
    tags: ["Tranquila", "Mimosa", "Silenciosa"],
    health: ["Esterilizada", "Vacunas al día", "Desparasitada"],
    idealHome: "Persona mayor o hogar tranquilo que le dé mimos y un lugar soleado para descansar."
  },
  {
    id: "firulais",
    name: "Firulais",
    type: "perro",
    gender: "Macho",
    age: "2 años",
    size: "Mediano (16 kg)",
    locationRescued: "Rescatado en Vía al Mar",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop",
    story: "Firulais es un perro alegre, juguetón y lleno de energía. Le encanta el agua, correr por la playa y hacer amigos en el parque. Es ideal para familias con niños que tengan tiempo para jugar con él.",
    tags: ["Juguetón", "Energético", "Apto para Niños"],
    health: ["Esterilizado", "Esquema de vacunas completo", "Desparasitado"],
    idealHome: "Familia activa con patio o cerca de zonas verdes para pasear y jugar."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PETS_DATA;
}
