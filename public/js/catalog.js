// База товаров
const products = [
  {id:1, category:'painting', title:'Портрет дамы в голубом', description:'Французская школа, масло, холст.', price:185000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/damaBlue.png', details:{'Техника':'Масло на холсте','Размер':'65×50 см','Рама':'Позолоченная','Состояние':'Отличное'}},
  {id:2, category:'painting', title:'Пейзаж с рекой', description:'Русский художник, идиллический вид.', price:125000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/reka.png', details:{'Техника':'Масло на картоне','Размер':'40×30 см','Автор':'Неизвестен','Состояние':'Хорошее'}},
  {id:3, category:'painting', title:'Натюрморт с фруктами', description:'Голландская школа, цветочная композиция.', price:245000, period:'18', century:'XVIII век', image:'imagescatalog/jivopiss/fruits.png', details:{'Техника':'Масло на меди','Размер':'35×28 см','Школа':'Голландская','Состояние':'Отличное'}},
  {id:4, category:'painting', title:'Морской пейзаж', description:'Парусники в шторм, динамичная композиция.', price:165000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/parusnik.png', details:{'Техника':'Масло на холсте','Размер':'70×90 см','Жанр':'Марина','Состояние':'Реставрировано'}},
  {id:5, category:'painting', title:'Портрет офицера', description:'Английский мастер, парадный мундир.', price:295000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/oficer.png', details:{'Техника':'Масло на холсте','Размер':'80×60 см','Школа':'Английская','Состояние':'Отличное'}},
  {id:6, category:'painting', title:'Цветы в вазе', description:'Розы и пионы, импрессионистическая манера.', price:135000, period:'20', century:'XX век', image:'imagescatalog/jivopiss/flowers.png', details:{'Техника':'Масло на холсте','Размер':'50×40 см','Стиль':'Импрессионизм','Состояние':'Хорошее'}},
  {id:7, category:'painting', title:'Зимний пейзаж', description:'Заснеженная деревня с церковью.', price:175000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/dervnya.png', details:{'Техника':'Масло на холсте','Размер':'60×80 см','Жанр':'Пейзаж','Состояние':'Отличное'}},
  {id:8, category:'painting', title:'Сцена из сельской жизни', description:'Крестьяне на ярмарке, детальная проработка.', price:155000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/selo.png', details:{'Техника':'Масло на дереве','Размер':'45×35 см','Жанр':'Бытовой','Состояние':'Хорошее'}},
  {id:9, category:'painting', title:'Портрет ребенка', description:'Девочка с куклой, нежная цветовая гамма.', price:145000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/girl.png', details:{'Техника':'Масло на холсте','Размер':'55×45 см','Рама':'Антикварная','Состояние':'Отличное'}},
  {id:10, category:'painting', title:'Вид Венеции', description:'Гранд-канал, гондолы, итальянская школа.', price:225000, period:'19', century:'XIX век', image:'imagescatalog/jivopiss/venecia.png', details:{'Техника':'Масло на холсте','Размер':'75×100 см','Школа':'Итальянская','Состояние':'Реставрировано'}},

  {id:11, category:'jewelry', title:'Брошь с аметистами', description:'Винтажная брошь, серебряная оправа.', price:45000, period:'20', century:'XX век', image:'imagescatalog/jewerly/broochAmethyst.jpg', details:{'Материал':'Серебро 925','Камни':'Аметисты','Размер':'5×4 см','Вес':'18 г'}},
  {id:12, category:'jewelry', title:'Колье с жемчугом', description:'Трехрядное, застежка из белого золота.', price:125000, period:'20', century:'XX век', image:'imagescatalog/jewerly/pearlNecklace.jpg', details:{'Материал':'Жемчуг, золото 585','Длина':'42 см','Проба':'585','Состояние':'Отличное'}},
  {id:13, category:'jewelry', title:'Перстень с рубином', description:'Мужской массивный перстень.', price:95000, period:'19', century:'XIX век', image:'imagescatalog/jewerly/rubyRing.jpg', details:{'Материал':'Золото 750','Камень':'Рубин','Размер':'20','Вес':'15 г'}},
  {id:14, category:'jewelry', title:'Серьги с бриллиантами', description:'Классические гвоздики, 0.5 карат.', price:85000, period:'20', century:'XX век', image:'imagescatalog/jewerly/diamondEarrings.jpg', details:{'Материал':'Золото 585','Камни':'Бриллианты','Проба':'585','Состояние':'Отличное'}},
  {id:15, category:'jewelry', title:'Браслет с гранатами', description:'Винтажный, натуральные камни.', price:65000, period:'20', century:'XX век', image:'imagescatalog/jewerly/garnetBracelet.jpg', details:{'Материал':'Серебро, позолота','Камни':'Гранаты','Длина':'19 см','Эпоха':'1960-е'}},
  {id:16, category:'jewelry', title:'Кулон с изумрудом', description:'Колумбийский изумруд, изящная оправа.', price:145000, period:'19', century:'XIX век', image:'imagescatalog/jewerly/emeraldPendant.jpg', details:{'Материал':'Золото 750','Камень':'Изумруд','Размер':'3×2 см','Вес':'8 г'}},
  {id:17, category:'jewelry', title:'Кольцо с сапфиром', description:'Помолвочное, голубой сапфир.', price:115000, period:'20', century:'XX век', image:'imagescatalog/jewerly/sapphireRing.jpg', details:{'Материал':'Золото 585','Камни':'Сапфир, бриллианты','Размер':'17','Вес':'5 г'}},
  {id:18, category:'jewelry', title:'Запонки с ониксом', description:'Мужские винтажные, черный оникс.', price:35000, period:'20', century:'XX век', image:'imagescatalog/jewerly/onyxCufflinks.jpg', details:{'Материал':'Золото 585','Камни':'Оникс','Размер':'2×1.5 см','Эпоха':'1970-е'}},
  {id:19, category:'jewelry', title:'Диадема с топазами', description:'Свадебная, голубые топазы.', price:75000, period:'20', century:'XX век', image:'imagescatalog/jewerly/topazTiara.jpg', details:{'Материал':'Серебро с позолотой','Камни':'Топазы','Размер':'Универсальный','Состояние':'Отличное'}},
  {id:20, category:'jewelry', title:'Подвеска с янтарем', description:'Балтийский янтарь, серебряная оправа.', price:28000, period:'20', century:'XX век', image:'imagescatalog/jewerly/amberPendant.jpg', details:{'Материал':'Серебро 925','Камень':'Балтийский янтарь','Размер':'4×3 см','Вес':'12 г'}},

  {id:21, category:'porcelain', title:'Ваза с росписью', description:'Ручная роспись, цветочный орнамент.', price:35000, period:'20', century:'XX век', image:'imagescatalog/farfor/paintedVase.jpg', details:{'Производитель':'Мейсен','Высота':'28 см','Техника':'Ручная роспись','Состояние':'Отличное'}},
  {id:22, category:'porcelain', title:'Чайный сервиз', description:'На 6 персон, позолота, цветочная роспись.', price:125000, period:'19', century:'XIX век', image:'imagescatalog/farfor/teaSet.jpg', details:{'Производитель':'Императорский фарфор','Предметов':'24','Декор':'Позолота','Состояние':'Хорошее'}},
  {id:23, category:'porcelain', title:'Статуэтка балерины', description:'Изящная фигурка в пачке.', price:45000, period:'20', century:'XX век', image:'imagescatalog/farfor/ballerinaFigurine.jpg', details:{'Производитель':'Capodimonte','Высота':'25 см','Эпоха':'1950-е','Состояние':'Отличное'}},
  {id:24, category:'porcelain', title:'Тарелка декоративная', description:'Настенная, вид Венеции.', price:18000, period:'19', century:'XIX век', image:'imagescatalog/farfor/decorativePlate.jpg', details:{'Производитель':'Вена','Диаметр':'32 см','Техника':'Переводная картинка','Рама':'Деревянная'}},
  {id:25, category:'porcelain', title:'Кофейная пара', description:'Чашка и блюдце, золотая кайма.', price:12000, period:'20', century:'XX век', image:'imagescatalog/farfor/coffeeSet.jpg', details:{'Производитель':'Ломоносов','Объем':'100 мл','Декор':'Позолота','Состояние':'Отличное'}},
  {id:26, category:'porcelain', title:'Ваза для фруктов', description:'На ножке, рельефный декор.', price:42000, period:'19', century:'XIX век', image:'imagescatalog/farfor/fruitVase.jpg', details:{'Производитель':'Севр','Высота':'35 см','Декор':'Рельеф, позолота','Состояние':'Хорошее'}},
  {id:27, category:'porcelain', title:'Фигурка собаки', description:'Спаниель, голубые глаза.', price:28000, period:'20', century:'XX век', image:'imagescatalog/farfor/dogFigurine.jpg', details:{'Производитель':'Гжель','Высота':'18 см','Техника':'Подглазурная роспись','Состояние':'Отличное'}},
  {id:28, category:'porcelain', title:'Сахарница с крышкой', description:'В форме раковины, изящная.', price:22000, period:'19', century:'XIX век', image:'imagescatalog/farfor/sugarBowl.jpg', details:{'Производитель':'Мейсен','Размер':'12×10 см','Декор':'Роспись','Состояние':'Отличное'}},
  {id:29, category:'porcelain', title:'Блюдо овальное', description:'Для подачи, цветочный борт.', price:32000, period:'20', century:'XX век', image:'imagescatalog/farfor/ovalDish.jpg', details:{'Производитель':'Дулево','Размер':'45×35 см','Роспись':'Цветочная','Состояние':'Хорошее'}},
  {id:30, category:'porcelain', title:'Статуэтка пастушки', description:'Романтическая, с овечкой.', price:38000, period:'19', century:'XIX век', image:'imagescatalog/farfor/shepherdessFigurine.jpg', details:{'Производитель':'Фюрстенберг','Высота':'22 см','Стиль':'Рококо','Состояние':'Отличное'}},

  {id:31, category:'furniture', title:'Комод викторианский', description:'Орех, мраморная столешница.', price:185000, period:'19', century:'XIX век', image:'imagescatalog/mebel/victorianCommode.jpg', details:{'Материал':'Орех','Размеры':'120×60×95 см','Стиль':'Викторианский','Состояние':'Реставрировано'}},
  {id:32, category:'furniture', title:'Зеркало в раме', description:'Напольное, резная позолоченная рама.', price:125000, period:'19', century:'XIX век', image:'imagescatalog/mebel/framedMirror.jpg', details:{'Материал':'Дерево, позолота','Размеры':'180×80 см','Стиль':'Барокко','Состояние':'Хорошее'}},
  {id:33, category:'furniture', title:'Столик журнальный', description:'Изящный, с инкрустацией.', price:95000, period:'19', century:'XIX век', image:'imagescatalog/mebel/coffeeTable.jpg', details:{'Материал':'Карельская береза','Размеры':'80×50×60 см','Декор':'Интрасия','Стиль':'Ампир'}},
  {id:34, category:'furniture', title:'Шкаф книжный', description:'Двухдверный, со стеклянными дверцами.', price:165000, period:'19', century:'XIX век', image:'imagescatalog/mebel/bookcase.jpg', details:{'Материал':'Дуб','Размеры':'120×45×200 см','Стиль':'Неоготика','Состояние':'Хорошее'}},
  {id:35, category:'furniture', title:'Кресло каминное', description:'Мягкое, высокая спинка, бархат.', price:85000, period:'19', century:'XIX век', image:'imagescatalog/mebel/fireplaceArmchair.jpg', details:{'Материал':'Дерево, бархат','Размеры':'70×75×110 см','Обивка':'Бархат бордовый','Стиль':'Викторианский'}},
  {id:36, category:'furniture', title:'Письменный стол', description:'Массивный, кожаные вставки.', price:195000, period:'19', century:'XIX век', image:'imagescatalog/mebel/writingDesk.jpg', details:{'Материал':'Орех','Размеры':'140×75×80 см','Стиль':'Эклектика','Состояние':'Реставрировано'}},
  {id:37, category:'furniture', title:'Консоль пристенная', description:'Изящная, мраморная столешница.', price:115000, period:'19', century:'XIX век', image:'imagescatalog/mebel/consoleTable.jpg', details:{'Материал':'Дерево, мрамор','Размеры':'100×40×85 см','Декор':'Позолота','Стиль':'Рококо'}},
  {id:38, category:'furniture', title:'Диван антикварный', description:'Трехместный, резные подлокотники.', price:225000, period:'19', century:'XIX век', image:'imagescatalog/mebel/antiqueSofa.jpg', details:{'Материал':'Дерево, шелк','Размеры':'200×80×100 см','Обивка':'Шелк','Стиль':'Ампир'}},
  {id:39, category:'furniture', title:'Стул венский', description:'Комплект из 6, гнутая древесина.', price:75000, period:'19', century:'XIX век', image:'imagescatalog/mebel/viennaChair.jpg', details:{'Материал':'Бук','Количество':'6 штук','Стиль':'Модерн','Производитель':'Thonet'}},
  {id:40, category:'furniture', title:'Буфет столовый', description:'Высокий, с зеркалом и витражами.', price:185000, period:'19', century:'XIX век', image:'imagescatalog/mebel/diningBuffet.jpg', details:{'Материал':'Дуб','Размеры':'130×50×220 см','Декор':'Витражи','Стиль':'Неоренессанс'}}
];

// Элементы DOM 
const productsGrid = document.getElementById('productsGrid');
const itemsCount = document.getElementById('itemsCount');
const globalSearch = document.getElementById('globalSearch');
const priceFrom = document.getElementById('priceFrom');
const priceTo = document.getElementById('priceTo');
const sortSelect = document.getElementById('sortSelect');
const resetFilters = document.getElementById('resetFilters');
const pagination = document.getElementById('pagination');
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutClose = document.getElementById('checkoutClose');
const checkoutCancel = document.getElementById('checkoutCancel');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSubmit = document.getElementById('checkoutSubmit');

// Состояние
let currentPage = 1;
const itemsPerPage = 12;
let filteredProducts = [...products];
let activeFilters = {
  categories: ['painting','jewelry','porcelain','furniture'],
  priceFrom: null, priceTo: null, period: [], search: ''
};

// Вспомогательные функции
function formatPrice(p) { return new Intl.NumberFormat('ru-RU').format(p) + ' ₽'; }
function getCategoryName(c) {
  return {painting:'Живопись', jewelry:'Ювелирные украшения', porcelain:'Фарфор', furniture:'Мебель'}[c] || c;
}

// Корзина с localStorage
function getCart() { const c = localStorage.getItem('antiqueCart'); return c ? JSON.parse(c) : []; }
function saveCart(c) { localStorage.setItem('antiqueCart', JSON.stringify(c)); updateCartBadge(); }
function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (badge) {
    const cart = getCart(), total = cart.reduce((s,i) => s + i.quantity, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

// Избранное с localStorage
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}
function saveFavorites(favs) {
    localStorage.setItem('favorites', JSON.stringify(favs));
}
function isFavorite(id) {
    return getFavorites().some(f => f.id == id);
}
function toggleFavorite(id) {
    let favs = getFavorites();
    const idx = favs.findIndex(f => f.id == id);
    const product = products.find(p => p.id == id);
    
    if (idx === -1) {
        // Добавить
        favs.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            addedAt: new Date().toISOString()
        });
        showToast(`💖 "${product.title}" добавлен в избранное`);
    } else {
        // Удалить
        favs.splice(idx, 1);
        showToast('💔 Удалено из избранного', 'info');
    }
    saveFavorites(favs);
    updateFavoriteIcons();
}
function updateFavoriteIcons() {
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const id = btn.dataset.id;
        const active = isFavorite(id);
        btn.innerHTML = active ? '❤️' : '🤍';
        btn.classList.toggle('active', active);
    });
}

// уведомления
function showToast(msg, type = 'success') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '✅'}</span><span>${msg}</span>`;
  toast.style.cssText = 'position:fixed;bottom:30px;right:30px;background:linear-gradient(135deg,#2c2c2c,#1a1a1a);color:#fff;padding:16px 24px;border-radius:12px;z-index:9999;font-family:Montserrat,sans-serif;font-size:0.95rem;box-shadow:0 8px 25px rgba(0,0,0,0.3);display:flex;align-items:center;gap:12px;animation:slideIn 0.4s ease, fadeOut 0.4s ease 2.6s forwards;border-left:4px solid #d4af37;max-width:350px';
  if(type==='success') toast.style.borderLeftColor='#4caf50';
  if(type==='error') toast.style.borderLeftColor='#f44336';
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.animation='fadeOut 0.4s ease forwards'; setTimeout(()=>toast.remove(),400); }, 3000);
}
if(!document.getElementById('toast-anim')){
  const s=document.createElement('style');s.id='toast-anim';
  s.textContent='@keyframes slideIn{from{transform:translateX(150%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fadeOut{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(150%)}}';
  document.head.appendChild(s);
}

function addToCart(id) {
  const p = products.find(x => x.id === id); if(!p) return;
  let cart = getCart(), ex = cart.find(i => i.id === id);
  if(ex) ex.quantity++; else cart.push({id:p.id, title:p.title, price:p.price, image:p.image, category:p.category, quantity:1});
  saveCart(cart); showToast(`"${p.title}" добавлен в корзину!`, 'success');
}
function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id); saveCart(cart);
  if(document.getElementById('cartItems')) renderCartPage(); showToast('🗑️ Товар удалён', 'info');
}
function clearCart() {
  if(confirm('Очистить корзину?')) { localStorage.removeItem('antiqueCart'); updateCartBadge(); if(document.getElementById('cartItems')) renderCartPage(); showToast('🧹 Корзина очищена', 'info'); }
}

// фильтрация и сортировка
function filterProducts() {
  filteredProducts = products.filter(p => {
    if(!activeFilters.categories.includes(p.category)) return false;
    if(activeFilters.period.length && !activeFilters.period.includes(p.period)) return false;
    if(activeFilters.priceFrom && p.price < activeFilters.priceFrom) return false;
    if(activeFilters.priceTo && p.price > activeFilters.priceTo) return false;
    if(activeFilters.search) {
      const s = activeFilters.search.toLowerCase();
      return p.title.toLowerCase().includes(s) || p.description.toLowerCase().includes(s) || getCategoryName(p.category).toLowerCase().includes(s);
    }
    return true;
  });
  sortProducts();
}
function sortProducts() {
  const v = sortSelect?.value;
  if(v==='price-asc') filteredProducts.sort((a,b)=>a.price-b.price);
  else if(v==='price-desc') filteredProducts.sort((a,b)=>b.price-a.price);
  else if(v==='name') filteredProducts.sort((a,b)=>a.title.localeCompare(b.title));
  else filteredProducts.sort((a,b)=>a.id-b.id);
}

// отрисовка
function renderProducts() {
  if(!productsGrid) return;
  productsGrid.innerHTML = '';
  const start=(currentPage-1)*itemsPerPage, end=start+itemsPerPage;
  filteredProducts.slice(start,end).forEach(p => {
    const card=document.createElement('div');
    card.className='product-card';
    card.onclick=()=>openModal(p);
    card.innerHTML=`
      <div class="product-image" style="background-image:url('${p.image}')">
        <span class="product-badge">${p.century}</span>
        <button class="fav-btn" data-id="${p.id}" onclick="event.stopPropagation(); toggleFavorite(${p.id})">🤍</button>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryName(p.category)}</div>
        <h3 class="product-title">${p.title}</h3>
        <p class="product-description">${p.description}</p>
        <div class="product-footer"><span class="product-price">${formatPrice(p.price)}</span><span class="product-period">${p.century}</span></div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="event.stopPropagation();addToCart(${p.id})">В корзину</button>
        </div>
      </div>`;
    productsGrid.appendChild(card);
  });
  if(itemsCount) itemsCount.textContent=`Показано товаров: ${filteredProducts.length}`;
  updatePagination();
  updateFavoriteIcons();
}
function updatePagination() {
  if(!pagination) return;
  const total=Math.ceil(filteredProducts.length/itemsPerPage);
  pagination.innerHTML='';
  for(let i=1;i<=total&&i<=5;i++){
    const btn=document.createElement('button');
    btn.className=`page-btn ${i===currentPage?'active':''}`;
    btn.textContent=i;
    btn.onclick=()=>{currentPage=i;renderProducts();productsGrid?.scrollIntoView({behavior:'smooth'});};
    pagination.appendChild(btn);
  }
}

// модальное окно товара
function openModal(p) {
  if(!modalBody) return;
  let det='';
  for(const[k,v]of Object.entries(p.details)) det+=`<div class="detail-item"><span class="detail-label">${k}</span><span class="detail-value">${v}</span></div>`;
  modalBody.innerHTML=`
    <div class="modal-image" style="background-image:url('${p.image}')"></div>
    <div class="modal-info">
      <div class="modal-category">${getCategoryName(p.category)}</div>
      <h2 class="modal-title">${p.title}</h2>
      <p class="modal-description">${p.description}</p>
      <div class="modal-details">${det}</div>
      <div class="modal-price">${formatPrice(p.price)}</div>
      <div class="modal-actions">
        <button class="btn-buy-now" onclick="buyNow(${p.id})">Купить сейчас</button>
        <button class="btn-request" onclick="requestInfo(${p.id});closeModal()">Запросить информацию</button>
      </div>
    </div>`;
  modal.style.display='block'; document.body.style.overflow='hidden';
}
function closeModal() { if(modal){modal.style.display='none';document.body.style.overflow='';} }
function buyNow(id) { const p=products.find(x=>x.id===id); if(p){addToCart(id);setTimeout(()=>openCheckoutModal(),600);} }
function requestInfo(id) { const p=products.find(x=>x.id===id); if(p) showToast(`📩 Запрос отправлен: "${p.title}"`, 'info'); }

// модальное окно заказа
function openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const cart = getCart();
    if (cart.length === 0) { showToast('Корзина пуста!', 'error'); return; }
    const list = document.getElementById('orderItemsList');
    const totalEl = document.getElementById('orderTotal');
    const countEl = document.getElementById('orderItemsCount');
    let total = 0, html = '';
    cart.forEach(item => {
        const sum = item.price * item.quantity; total += sum;
        html += `<div class="order-item"><span>${item.title} × ${item.quantity}</span><span>${formatPrice(sum)}</span></div>`;
    });
    if (list) list.innerHTML = html;
    if (totalEl) totalEl.textContent = formatPrice(total);
    if (countEl) {
        const count = cart.reduce((s, i) => s + i.quantity, 0);
        countEl.textContent = `${count} товар${count > 1 && count < 5 ? 'а' : 'ов'}`;
    }
    if (modal) { modal.classList.add('active'); document.body.style.overflow = 'hidden'; }
}
function closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
}

// страница корзины
function renderCartPage() {
  const cont=document.getElementById('cartItems'); if(!cont) return;
  const cart=getCart();
  if(!cart.length){cont.innerHTML='<div class="cart-empty"><img src="images/cart.png" alt="Корзина" style="width:40px;height:40px;margin-bottom:20px;opacity:0.5;"><br>Корзина пуста.<br><a href="catalog.html" style="color:#7a2e3a">В каталог →</a></div>';return;}
  let total=0, html='';
  cart.forEach(i => { total+=i.price*i.quantity; html+=`<div class="cart-item"><div class="cart-item-img" style="background-image:url('${i.image}')"></div><div class="cart-item-info"><div class="cart-item-title">${i.title}</div><div class="cart-item-price">${formatPrice(i.price)}</div><div class="cart-item-qty">Количество: ${i.quantity}</div><button class="cart-item-remove" onclick="removeFromCart(${i.id})">Удалить</button></div></div>`; });
  cont.innerHTML=`<div class="cart-items">${html}</div><div class="cart-total">Итого: ${formatPrice(total)}</div><div class="cart-actions"><button class="btn-checkout" onclick="openCheckoutModal()">Оформить заказ</button><button class="btn-clear" onclick="clearCart()">Очистить</button></div>`;
  updateCartBadge();
}

// Отправка заказа через php 
if(checkoutForm) {
  checkoutForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('checkoutSubmit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true; submitBtn.textContent = 'Отправка...';
    const formData = {
      name: this.name.value.trim(), phone: this.phone.value.trim(), email: this.email.value.trim(),
      delivery: this.delivery.value, comment: this.comment.value.trim(),
      cart: getCart(),
      total: parseFloat((document.getElementById('orderTotal')?.textContent || '0').replace(/[^0-9.,]/g,'').replace(',','.')) || 0
    };
    try {
      const response = await fetch('php/order.php', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(formData) });
      const result = await response.json();
      if(result.success) {
        clearCart(); closeCheckoutModal();
        showToast(`🎉 Спасибо, ${formData.name}! Заказ №${result.order_id} принят.`, 'success');
        this.reset();
      } else { showToast(`❌ Ошибка: ${result.message}`, 'error'); }
    } catch(error) {
      console.error('Ошибка отправки:', error);
      showToast('❌ Не удалось отправить заказ.', 'error');
    } finally {
      submitBtn.disabled = false; submitBtn.textContent = originalText;
    }
  });
}

// обработчики событий
if(globalSearch) globalSearch.addEventListener('input', e => { activeFilters.search=e.target.value; currentPage=1; filterProducts(); renderProducts(); });
document.querySelectorAll('input[name="category"]')?.forEach(cb => cb.addEventListener('change', () => {
  activeFilters.categories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(x=>x.value);
  currentPage=1; filterProducts(); renderProducts();
}));
document.querySelectorAll('input[name="period"]')?.forEach(cb => cb.addEventListener('change', () => {
  activeFilters.period = Array.from(document.querySelectorAll('input[name="period"]:checked')).map(x=>x.value);
  currentPage=1; filterProducts(); renderProducts();
}));
if(priceFrom) priceFrom.addEventListener('change', () => { activeFilters.priceFrom=parseInt(priceFrom.value)||null; currentPage=1; filterProducts(); renderProducts(); });
if(priceTo) priceTo.addEventListener('change', () => { activeFilters.priceTo=parseInt(priceTo.value)||null; currentPage=1; filterProducts(); renderProducts(); });
if(sortSelect) sortSelect.addEventListener('change', () => { filterProducts(); renderProducts(); });
if(resetFilters) resetFilters.addEventListener('click', () => {
  document.querySelectorAll('input[name="category"]').forEach(cb=>cb.checked=true);
  document.querySelectorAll('input[name="period"]').forEach(cb=>cb.checked=false);
  if(priceFrom) priceFrom.value=''; if(priceTo) priceTo.value='';
  if(globalSearch) globalSearch.value=''; if(sortSelect) sortSelect.value='default';
  activeFilters = {categories:['painting','jewelry','porcelain','furniture'], priceFrom:null, priceTo:null, period:[], search:''};
  currentPage=1; filterProducts(); renderProducts();
});
if(modalClose) modalClose.addEventListener('click', closeModal);
if(modal) modal.addEventListener('click', e => { if(e.target===modal) closeModal(); });
if(checkoutClose) checkoutClose.addEventListener('click', closeCheckoutModal);
if(checkoutCancel) checkoutCancel.addEventListener('click', closeCheckoutModal);
if(checkoutModal) checkoutModal.addEventListener('click', e => { if(e.target===checkoutModal) closeCheckoutModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape'){closeModal();closeCheckoutModal();} });
document.querySelector('.btn-checkout')?.addEventListener('click', (e) => { e.preventDefault(); openCheckoutModal(); });

// Запуск
document.addEventListener('DOMContentLoaded', () => {
  filterProducts(); renderProducts(); updateCartBadge(); updateFavoriteIcons();
  if(document.getElementById('cartItems')) renderCartPage();
});