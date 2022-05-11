const miniElem = document.querySelector('body');
const minMenu =document.querySelector('.min_menu');
const htmlElem = document.querySelector('html');
const itemMenu = ['ГЛАВНАЯ', 'УСЛУГИ', 'КЕЙСЫ', 'О КОМПАНИИ', 'КОНТАКТЫ'];

const window_menu = document.createElement('div');
const menu_mini_text = document.createElement('div');
	window_menu.classList.add('noaktiv');
	menu_mini_text.classList.add('menu_mini_text');

	
	window_menu.append(menu_mini_text)
	miniElem.append(window_menu);

minMenu.addEventListener('click', ()=>{
	let getPosition = window.pageYOffset
	window_menu.classList.remove('noaktiv');
	window_menu.classList.add('window_menu');
	window_menu.style.top = getPosition+'px'
	htmlElem.style.overflow = 'hidden';
	//menu_mini_text.style.right = '0'
	setTimeout(render_point_nav, 2 * 100, '0');
});

window_menu.addEventListener('click', ()=>{
	
	window_menu.classList.remove('window_menu');
	window_menu.classList.add('noaktiv')
	htmlElem.style.overflow = 'unset';
	//menu_mini_text.style.right = '-260px'
	render_point_nav('-260');
	
})

const text_menu = itemMenu.map(values => {
	const name_menu = document.createElement('a');
	name_menu.setAttribute('href', '#');
	name_menu.textContent = values;
	name_menu.classList.add('line-link');
	return(name_menu);
})

menu_mini_text.append(...text_menu);

const render_point_nav = (rightPoin)=>{
	menu_mini_text.style.right = rightPoin + 'px';
};

