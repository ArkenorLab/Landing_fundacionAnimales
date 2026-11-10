/**
 * FUNDACIÓN ANIMALES BAQ - LÓGICA PRINCIPAL (app.js)
 * Interactividad ligera, filtros de adopción, modales y contacto por WhatsApp.
 */

let PETS_LIMIT = 6;
let petsExpanded = false;
let currentFilter = 'todos';

const FOUNDATION_CONFIG = {
  name: "FUNDACIÓN ANIMALES BAQ",
  city: "Barranquilla, Atlántico, Colombia",
  whatsappNumber: "573001234567", // Número de WhatsApp oficial
  whatsappBaseMessage: "Hola, quiero información para adoptar un peludo de Fundación Animales BAQ",
  email: "adopciones@fundacionanimalesbaq.org",
  donations: {
    nequi: "300 123 4567",
    daviplata: "300 123 4567",
    bancolombiaAhorros: "782-000123-45",
    titular: "Fundación Fundación Animales BAQ BAQ"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderPetsGallery('todos', PETS_LIMIT);
  initFilterButtons();
  initTogglePets();
  initAdoptionModal();
  initDonationCopyButtons();
  initMobileNavigation();
  initFloatingWhatsApp();
  initAdoptionForm();
});

/**
 * 1. Renderizado Dinámico de la Galería de Peludos
 */
function renderPetsGallery(filter = 'todos', limit = null) {
  const container = document.getElementById('pets-grid');
  if (!container || typeof PETS_DATA === 'undefined') return;

  const filteredPets = filter === 'todos' 
    ? PETS_DATA 
    : PETS_DATA.filter(p => p.type === filter);

  container.innerHTML = '';

  if (filteredPets.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 text-[#7D6B5D]">
        <p class="text-lg font-medium">Por el momento no hay peludos en esta categoría.</p>
        <p class="text-sm mt-1">¡Pero puedes postularte para ser hogar de paso y salvar vidas!</p>
      </div>
    `;
    const toggleBtn = document.getElementById('toggle-pets-btn');
    if (toggleBtn) toggleBtn.classList.add('hidden');
    return;
  }

  const showAll = petsExpanded || !limit;
  const displayPets = showAll ? filteredPets : filteredPets.slice(0, PETS_LIMIT);

  container.innerHTML = '';

  displayPets.forEach(pet => {
    const card = document.createElement('article');
    card.className = "pet-card bg-white rounded-3xl overflow-hidden border border-[#F3E8E2] shadow-sm flex flex-col justify-between group";
    
    // Distintivos de salud y tipo
    const healthBadges = pet.health.map(h => `
      <span class="inline-flex items-center text-[11px] font-semibold text-[#15803d] bg-[#dcfce7] px-2.5 py-0.5 rounded-full">
        ✓ ${h}
      </span>
    `).join('');

    const tagBadges = pet.tags.map(t => `
      <span class="text-[11px] font-medium text-[#7D6B5D] bg-[#F7F3EC] px-2.5 py-1 rounded-lg">
        ${t}
      </span>
    `).join('');

    card.innerHTML = `
      <div>
        <!-- Imagen del Peludo con Badges -->
          <div class="relative h-48 sm:h-56 lg:h-60 w-full overflow-hidden bg-[#F7F3EC]">
          <img 
            src="${pet.image}" 
            alt="Foto de ${pet.name}, ${pet.type} rescatado en Barranquilla" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy" 
            width="400" 
            height="300"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27400%27 height=%27300%27 viewBox=%270 0 400 300%27%3E%3Crect width=%27400%27 height=%27300%27 fill=%27%23F7F3EC%27/%3E%3Ctext x=%27200%27 y=%27150%27 font-size=%2718%27 fill=%27%23968375%27 text-anchor=%27middle%27 dominant-baseline=%27middle%27 font-family=%27sans-serif%27%3EImagen no disponible%3C/text%3E%3C/svg%3E'"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
          
          <!-- Badge de Edad / Género -->
          <div class="absolute top-4 left-4 flex flex-wrap gap-1.5">
            <span class="text-xs font-bold text-white bg-[#FF2A85] px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              ${pet.gender === 'Macho' ? '♂' : '♀'} ${pet.name}
            </span>
            <span class="text-xs font-semibold text-[#4A3B32] bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
              ${pet.age}
            </span>
          </div>

          <!-- Lugar de rescate -->
          <div class="absolute bottom-3 left-4 right-4 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow">
            <svg class="w-3.5 h-3.5 text-[#FF2A85] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
            <span class="truncate">${pet.locationRescued}</span>
          </div>
        </div>

        <!-- Contenido de la Tarjeta -->
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-2xl font-bold text-[#4A3B32] group-hover:text-[#FF2A85] transition-colors">${pet.name}</h3>
            <span class="text-xs font-semibold uppercase tracking-wider text-[#968375] bg-[#FDFBF7] px-2.5 py-1 rounded-md border border-[#F3E8E2]">
              ${pet.size}
            </span>
          </div>

          <p class="text-sm text-[#7D6B5D] line-clamp-3 mb-4 leading-relaxed">
            ${pet.story}
          </p>

          <!-- Tags de Personalidad -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${tagBadges}
          </div>

          <!-- Estado de Salud -->
          <div class="flex flex-wrap gap-1.5 pt-3 border-t border-[#F3E8E2]">
            ${healthBadges}
          </div>
        </div>
      </div>

      <!-- Botones de Acción de la Tarjeta -->
      <div class="p-6 pt-0">
        <button 
          type="button" 
          onclick="openAdoptionModal('${pet.id}')"
          class="w-full py-3.5 px-4 rounded-2xl bg-[#FF2A85] hover:bg-[#E0176F] active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-[#FF2A85]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <span>Quiero Conocer a ${pet.name}</span>
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Mostrar/ocultar botón Ver más / Ver menos
  const toggleBtn = document.getElementById('toggle-pets-btn');
  if (toggleBtn) {
    if (filteredPets.length <= PETS_LIMIT) {
      toggleBtn.classList.add('hidden');
    } else {
      toggleBtn.classList.remove('hidden');
      toggleBtn.textContent = petsExpanded ? 'Ver menos' : 'Ver más';
      toggleBtn.setAttribute('aria-expanded', petsExpanded);
    }
  }
}

/**
 * 2. Botones de Filtro (Todos / Perritos / Gatitos)
 */
function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#FF2A85]', 'text-white', 'shadow-md', 'shadow-[#FF2A85]/20');
        b.classList.add('bg-white', 'text-[#4A3B32]', 'border', 'border-[#F3E8E2]');
      });
      btn.classList.add('bg-[#FF2A85]', 'text-white', 'shadow-md', 'shadow-[#FF2A85]/20');
      btn.classList.remove('bg-white', 'text-[#4A3B32]', 'border', 'border-[#F3E8E2]');

      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      petsExpanded = false;
      renderPetsGallery(filter, PETS_LIMIT);
    });
  });
}

/**
 * 2.5. Botón Ver Más / Ver Menos de la Galería
 */
function initTogglePets() {
  const btn = document.getElementById('toggle-pets-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    petsExpanded = !petsExpanded;
    renderPetsGallery(currentFilter, PETS_LIMIT);
  });
}

/**
 * 3. Modal Detallado de Adopción
 */
function initAdoptionModal() {
  const modal = document.getElementById('pet-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (!modal) return;

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

function openAdoptionModal(petId) {
  const pet = PETS_DATA.find(p => p.id === petId);
  const modal = document.getElementById('pet-modal');
  if (!pet || !modal) return;

  // Inyectar datos en el modal
  document.getElementById('modal-pet-name').textContent = pet.name;
  document.getElementById('modal-pet-image').src = pet.image;
  document.getElementById('modal-pet-image').alt = `Foto de ${pet.name}`;
  document.getElementById('modal-pet-age').textContent = pet.age;
  document.getElementById('modal-pet-gender').textContent = pet.gender;
  document.getElementById('modal-pet-size').textContent = pet.size;
  document.getElementById('modal-pet-rescued').textContent = pet.locationRescued;
  document.getElementById('modal-pet-story').textContent = pet.story;
  document.getElementById('modal-pet-home').textContent = pet.idealHome;

  // Salud
  const healthContainer = document.getElementById('modal-pet-health');
  healthContainer.innerHTML = pet.health.map(h => `
    <span class="inline-flex items-center text-xs font-semibold text-[#15803d] bg-[#dcfce7] px-3 py-1 rounded-full">
      ✓ ${h}
    </span>
  `).join('');

  // Botón directo a WhatsApp con mensaje personalizado del peludo
  const waBtn = document.getElementById('modal-whatsapp-btn');
  const waMsg = `¡Hola Fundación Animales BAQ! Me enamoré de ${pet.name} (${pet.type}, ${pet.age}) y deseo iniciar el proceso de adopción responsable en Barranquilla. ¿Me cuentan los pasos?`;
  waBtn.href = `https://wa.me/${FOUNDATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;

  // Botón para preseleccionar en el formulario de la página
  const formSelectBtn = document.getElementById('modal-apply-form-btn');
  if (formSelectBtn) {
    formSelectBtn.onclick = () => {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      const select = document.getElementById('form-pet-select');
      if (select) {
        select.value = pet.name;
      }
      const formSection = document.getElementById('adopta');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }

  // Mostrar modal
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

/**
 * 4. Copiar Cuentas de Donación (Nequi, Daviplata, Bancolombia)
 */
function initDonationCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`¡Número copiado al portapapeles: ${textToCopy}!`, 'success');
      }).catch(() => {
        showToast(`Número: ${textToCopy}`, 'info');
      });
    });
  });
}

/**
 * 5. Menú Móvil
 */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const links = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !menu) return;

  const open = () => {
    menu.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  };

  const close = () => {
    menu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  toggleBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
}

/**
 * 6. Botón Flotante de WhatsApp
 */
function initFloatingWhatsApp() {
  const waBtn = document.getElementById('floating-whatsapp');
  if (waBtn) {
    waBtn.href = `https://wa.me/${FOUNDATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(FOUNDATION_CONFIG.whatsappBaseMessage)}`;
  }
}

/**
 * 7. Formulario de Solicitud de Adopción
 */
function initAdoptionForm() {
  const form = document.getElementById('adoption-application-form');
  if (!form) return;

  // Llenar dinámicamente opciones del select de peludos
  const select = document.getElementById('form-pet-select');
  if (select && typeof PETS_DATA !== 'undefined') {
    PETS_DATA.forEach(pet => {
      const option = document.createElement('option');
      option.value = pet.name;
      option.textContent = `${pet.name} (${pet.type === 'perro' ? 'Perrito' : 'Gatito'} - ${pet.age})`;
      select.appendChild(option);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('applicant-name')?.value.trim();
    const phone = document.getElementById('applicant-phone')?.value.trim();
    const neighborhood = document.getElementById('applicant-neighborhood')?.value.trim() || 'Barranquilla';
    const petChosen = select?.value || 'El que más lo necesite';
    const homeType = document.getElementById('applicant-home-type')?.value || 'Casa';
    const experience = document.getElementById('applicant-notes')?.value.trim() || 'Deseo brindarle mucho amor.';

    if (!name || !phone) {
      showToast('Por favor completa tu nombre y número de WhatsApp.', 'error');
      return;
    }

    // Mensaje estructurado para WhatsApp
    const waText = `🐾 *SOLICITUD DE ADOPCIÓN RESPONSABLE*\n` +
      `------------------------------------\n` +
      `👤 *Postulante:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `📍 *Barrio / Sector:* ${neighborhood}\n` +
      `🐶 *Peludo de interés:* ${petChosen}\n` +
      `🏡 *Tipo de vivienda:* ${homeType}\n` +
      `💬 *Detalles del hogar:* ${experience}\n` +
      `------------------------------------\n` +
      `¡Hola equipo de Fundación Animales BAQ! Acabo de completar el formulario y quiero coordinar la entrevista.`;

    showToast('¡Gracias por tu amor! Abriendo WhatsApp para continuar tu postulación...', 'success');

    setTimeout(() => {
      window.open(`https://wa.me/${FOUNDATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`, '_blank');
      form.reset();
    }, 1000);
  });
}

/**
 * Sistema de Notificaciones Toast
 */
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none px-4 w-full max-w-sm';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const isSuccess = type === 'success';

  toast.className = `p-4 rounded-2xl shadow-xl border text-sm font-semibold flex items-center gap-3 toast-animate pointer-events-auto backdrop-blur-md ${
    isSuccess 
      ? 'bg-[#4A3B32] text-white border-[#FF2A85]/50 shadow-[#FF2A85]/10' 
      : 'bg-rose-900 text-white border-rose-400/50 shadow-rose-950/20'
  }`;

  toast.innerHTML = `
    <span class="text-xl shrink-0">${isSuccess ? '🐾' : '⚠️'}</span>
    <div class="flex-1 text-xs sm:text-sm">${message}</div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}
