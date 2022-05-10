const rootElem = document.querySelector('#root');
const imgList = [
	{
		sld_text: 'Бухгалтерские услуги в Санкт-Петербурге',
		btn_text: 'Наша презентация'
	},
	{
		sld_text: 'Бухгалтерские услуги в Москве',
		btn_text: 'Наша презентация'
	},
	{
		sld_text: 'Бухгалтерские услуги в Сочи',
		btn_text: 'Наша презентация'
	},
	{
		sld_text: 'Бухгалтерские услуги в Солнечногорске',
		btn_text: 'Наша презентация'
	},
	{
		sld_text: 'Бухгадтерские услуги в Зеленограде',
		btn_text: 'Наша презентация'
	}
];
const mediaPath = 'img/'
let imgIndex = 0;


const slider_container = document.createElement('div');
const slider_main = document.createElement('div');
const slider_film = document.createElement('div');
const slider_trigger = document.createElement('div');
const slider_trigger_left = document.createElement('div');
const slider_trigger_right = document.createElement('div');
slider_trigger_left.innerHTML = '<';
slider_trigger_right.innerHTML = '>';

slider_container.classList.add('slider-container');
slider_container.style.backgroundImage = `url(img/img_1.png)`;
slider_main.classList.add('slider-main');
slider_trigger.classList.add('slider-trigger');
slider_film.classList.add('slider-film')

slider_trigger.append(slider_trigger_left, slider_trigger_right);
slider_container.append(slider_main, slider_trigger);
slider_main.append(slider_film);
rootElem.append(slider_container);

const film_elems = imgList.map(values=>{
	const slider_width = slider_container.offsetWidth;
	const divElem = document.createElement('div');
	const divInfo = document.createElement('div');
	const textElem = document.createElement('p');
	const btnElem = document.createElement('a');

	divElem.style.width = slider_width + 'px';
	btnElem.setAttribute('href', '#');
	divInfo.append(textElem, btnElem)
	divElem.append(divInfo);
	textElem.innerText = values.sld_text;
	btnElem.textContent = values.btn_text;
	divInfo.classList.add('div_info')
	textElem.classList.add('text_slider');
	btnElem.classList.add('btn_slider');
	return divElem;
})

const render = ()=>{
	const slider_width = slider_container.offsetWidth;
	slider_film.style.right = slider_width * imgIndex + 'px';

};

const render_point = ()=>{
	const liList = document.querySelectorAll('.gallery-points li');
		
		liList.forEach(t=>t.classList.remove('active'));
		liList[imgIndex].classList.add('active');
};

const changeSize = ()=>{
	const slider_width = slider_container.offsetWidth;
	slider_film.style.width = slider_width * imgList.length +'px';
	film_elems.forEach(elem => elem.style.width = slider_width + 'px');
	render();
};

window.addEventListener('resize', changeSize);
changeSize();

slider_film.append(...film_elems);

slider_trigger_left.addEventListener('click', ()=>{
	if (imgIndex > 0){
		imgIndex--;
	}else{
		imgIndex = imgList.length - 1;
	}
	render_point();
	render()
});
slider_trigger_right.addEventListener('click', ()=>{
	if (imgList.length - 1 > imgIndex){
		imgIndex++;
	}else{
		imgIndex = 0;
	}
	render_point();
	render()
});

const ulElem = document.createElement('ul');
	ulElem.classList.add('gallery-points');

	ulElem.append(...imgList.map((_, index)=>{
		const elem = document.createElement('li');

		elem.addEventListener('click', event=>{
			const liElem = event.target;
			const liList = [...liElem.parentNode.children];
			imgIndex = liList.indexOf(liElem);
			render_point();
			render();
		});
		return elem;
	}));


	slider_container.append(ulElem);

render_point();

const cardService = document.querySelector('.cards')
const cardInfo = [
	{
		name: 'Бухгалтерское обслуживание'
	},
	{
		name: 'Бухгалтерское обслуживание'
	},
	{
		name: 'Бухгалтерское обслуживание'
	},
	{
		name: 'Бухгалтерское обслуживание'
	},
	{
		name: 'Бухгалтерское обслуживание'
	},
	{
		name: 'Бухгалтерское обслуживание'
	}
];

const Info_elems = cardInfo.map(values=>{
	const divInfo = document.createElement('div');
	const textElem = document.createElement('p');

	divInfo.append(textElem);
	textElem.innerText = values.name;
	return divInfo;
});

cardService.append(...Info_elems);

const aboutCards = document.querySelector ('.company_cards');
const arryCard = [
{
	count: 90,
	info: 'Завершено крупных сделок',
	link: 'Все кейсы'
},
{
	count: 90,
	info: 'Завершено крупных сделок',
	link: 'Все кейсы'
},
{
	count: 90,
	info: 'Завершено крупных сделок',
	link: 'Все кейсы'
},
{
	count: 90,
	info: 'Завершено крупных сделок',
	link: 'Все кейсы'
}
];
 
const cards_elems = arryCard.map(values=>{
	const divCard = document.createElement('div');
	const textCount = document.createElement('p');
	const textInfo = document.createElement('p');
	const textLink = document.createElement('a')

	textLink.setAttribute('href', '#');
	divCard.append(textCount, textInfo, textLink);
	textCount.innerText = values.count;
	textInfo.innerText = values.info;
	textLink. textContent = values.link;
	textCount.classList.add('number');
	textInfo.classList.add('word');

	divCard.addEventListener('mouseover', ()=>{
		divCard.style.backgroundColor = '#005FA3';
		textCount.style.color = 'white';
		textInfo.style.color = 'white';
		textLink.style.color = 'white';

	});
	divCard.addEventListener('mouseout', ()=>{
		divCard.style.backgroundColor = '';
		textCount.style.color = '';
		textInfo.style.color = '';
		textLink.style.color = '';
	});
	return divCard;
});

aboutCards.append(...cards_elems);


const podvalElem = document.querySelector('#podval');
podvalElem.style.backgroundImage = `url(img/img_podval.jpg)`;
