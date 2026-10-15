// Menu illustrations are centrally configured and must be replaced by official product photos.
const ASSET_BASE='assets/';
const menu=[
 {name:'Mie Ayam Original',category:'mie',price:15000,description:'Mie, ayam berbumbu, sayuran, dan kuah hangat.',image:'mie-ayam.webp',tag:'Klasik'},
 {name:'Mie Ayam Bakso',category:'mie',price:20000,description:'Mie ayam dengan bakso. Dua pilihan, satu mangkuk.',image:'mie-ayam-bakso.webp',tag:'Rekomendasi konsep'},
 {name:'Bakso Kuah',category:'bakso',price:18000,description:'Bakso, kuah gurih, dan pelengkap. Nikmati hangat.',image:'bakso.webp',tag:'Hangat & gurih'},
 {name:'Es Teh',category:'minuman',price:5000,description:'Teh dingin untuk menemani mangkuk pilihanmu.',image:'es-teh.webp',tag:'Minuman'}
];
const rupiahMenu=new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0});
function render(category='semua',animate=false){
 const items=menu.filter(item=>category==='semua'||item.category===category);
 const grid=document.querySelector('#menu-grid');
 grid.replaceChildren(...items.map(item=>{
  const article=document.createElement('article');article.className='menu-card';
  const index=menu.indexOf(item);const number=String(index+1).padStart(2,'0');
  article.innerHTML=`<div class="food-image"><!-- TODO: Replace with official product photo, target size: 800x800 --><img src="${ASSET_BASE}${item.image}" alt="Foto ilustrasi ${item.name}, bukan produk resmi" width="800" height="800" ${index<2?'fetchpriority="high"':'loading="lazy"'}><span class="dish-index">${number}</span></div><div class="menu-card-head"><h3>${item.name}</h3><span class="price">${rupiahMenu.format(item.price)}</span></div><p>${item.description}</p><a class="dish-action" href="#pesan" data-menu="${item.name}" aria-label="Informasi pemesanan ${item.name}"><span>${item.tag}</span>Info pesan ↗</a>`;
  return article;
 }));
 document.querySelector('#menu-count').textContent=items.length+' pilihan / menu contoh';
 if(animate){grid.classList.remove('entrance','is-filtering');void grid.offsetWidth;grid.classList.add('is-filtering')}
}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(other=>{other.classList.toggle('active',other===button);other.setAttribute('aria-pressed',String(other===button))});render(button.dataset.filter,true)}));
document.querySelector('#menu-grid').addEventListener('click',event=>{const link=event.target.closest('[data-menu]');if(!link)return;document.querySelector('#topic').value='Menu dan pemesanan';const message=document.querySelector('#message');message.value='Saya ingin bertanya tentang '+link.dataset.menu+'.';message.dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('#form-result').hidden=true;});
document.querySelector('[data-interest]').addEventListener('click',()=>{document.querySelector('#topic').value='Kemitraan';document.querySelector('#form-result').hidden=true;document.querySelector('#pesan').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});document.querySelector('#name').focus({preventScroll:true})});
let messageUrl;document.querySelector('#contact-form').addEventListener('submit',event=>{event.preventDefault();const name=document.querySelector('#name'),message=document.querySelector('#message');if(!name.value.trim()||!message.value.trim()){(name.value.trim()?message:name).setCustomValidity('Isi bagian ini dengan teks.');event.target.reportValidity();return}if(messageUrl)URL.revokeObjectURL(messageUrl);messageUrl=URL.createObjectURL(new Blob([`Nama: ${name.value.trim()}\nTopik: ${document.querySelector('#topic').value}\n\n${message.value.trim()}`],{type:'text/plain;charset=utf-8'}));document.querySelector('#download').href=messageUrl;document.querySelector('#form-result').hidden=false});document.querySelectorAll('input,textarea').forEach(input=>input.addEventListener('input',()=>{input.setCustomValidity('');document.querySelector('#form-result').hidden=true}));document.querySelector('#year').textContent=new Date().getFullYear();


const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const outletSlider=document.querySelector('#outlet-slider'),portionSlider=document.querySelector('#portion-slider');const rupiah=new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0});let revenueFrame;let displayedRevenue=3.24;
function updateSimulation(animate=true){const outlets=Number(outletSlider.value),portions=Number(portionSlider.value);const perOutlet=portions*18000*30,total=outlets*perOutlet,target=total/1e9;document.querySelector('#outlet-output').textContent=outlets+' outlet';outletSlider.setAttribute('aria-valuetext',outlets+' outlet');document.querySelector('#portion-output').textContent=portions+' porsi';portionSlider.setAttribute('aria-valuetext',portions+' porsi');document.querySelector('.revenue-footnote').textContent='Simulasi '+outlets+' outlet, '+portions+' porsi per outlet per hari.';document.querySelector('#receipt-outlets').textContent=outlets;document.querySelector('#receipt-portions').textContent=portions;document.querySelector('#outlet-revenue').textContent=rupiah.format(perOutlet);document.querySelector('.receipt-foot').textContent=outlets+' × '+portions+' × Rp18.000 × 30 hari';cancelAnimationFrame(revenueFrame);const from=displayedRevenue,start=performance.now();function tick(now){const progress=!animate||reducedMotion?1:Math.min((now-start)/350,1);displayedRevenue=from+(target-from)*(1-Math.pow(1-progress,3));document.querySelector('#revenue-value').textContent=displayedRevenue.toLocaleString('id-ID',{minimumFractionDigits:2,maximumFractionDigits:3});if(progress<1)revenueFrame=requestAnimationFrame(tick)}revenueFrame=requestAnimationFrame(tick)}outletSlider.addEventListener('input',()=>updateSimulation());portionSlider.addEventListener('input',()=>updateSimulation());document.querySelector('#reset-simulation').addEventListener('click',()=>{outletSlider.value=50;portionSlider.value=120;updateSimulation()});updateSimulation(false);

// Reflect field validation in visible, associated helper slots.
document.querySelectorAll('#name,#message').forEach(input=>{
 const helper=document.querySelector('#'+input.id+'-error');
 function check(){const valid=Boolean(input.value.trim());input.setAttribute('aria-invalid',String(!valid));helper.textContent=valid?'':(input.id==='name'?'Nama belum diisi. Tulis nama kamu.':'Pesan belum diisi. Tulis pertanyaan kamu.');return valid}
 input.addEventListener('blur',()=>{input.dataset.touched='true';check()});
 input.addEventListener('input',()=>{if(input.dataset.touched)check()});
 input.addEventListener('invalid',()=>{input.dataset.touched='true';check()});
});
document.querySelector('#topic').addEventListener('change',()=>{document.querySelector('#form-result').hidden=true});
