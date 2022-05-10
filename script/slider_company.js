const clientsElem = document.querySelector('#clients');
const imgClient = ['microsoft.png', 'lenta.png', 'adidas.png', 'ipuk.png'];
let sliderIndex = 0;

const slid_container = document.createElement('div');
const slid_main = document.createElement('div');
const slid_trigger = document.createElement('div');
const slid_trigger_left = document.createElement('div');
const slid_trigger_right = document.createElement('div');
const slid_film = document.createElement('div');
slid_trigger_left.innerHTML = '<';
slid_trigger_right.innerHTML = '>';
slid_container.classList.add('slider-container', 'slid-cont-add');
slid_trigger.classList.add('slider-trigger', 'slider-triger-add');
slid_main.classList.add('slider-main');
slid_film.classList.add('slider-film');

slid_trigger.append(slid_trigger_left, slid_trigger_right);
slid_container.append(slid_main, slid_trigger);
slid_main.append(slid_film);
clientsElem.append(slid_container);


const film_elem = imgClient.map(values=>{
	const slid_width = slid_container.offsetWidth;
	const divElem = document.createElement('div');
	const imgElem = document.createElement('img');
	divElem.style.width = slid_width + 'px';
	imgElem.src = mediaPath+values;
	imgElem.style.width = '100%';	
	divElem.classList.add('slid-film');
	divElem.append(imgElem);
	return divElem;
})

const render_slide = ()=>{
	const slid_width = slid_container.offsetWidth;
	slid_film.style.right = slid_width * sliderIndex + 'px';

};

const render_points = ()=>{
	const liLists = document.querySelectorAll('.slider-points li');	
		liLists.forEach(t=>t.classList.remove('active'));
		liLists[sliderIndex].classList.add('active');
};

const changeSizes = ()=>{
	const slid_width = slid_container.offsetWidth;
	slid_film.style.width = slid_width * imgClient.length +'px';
	film_elem.forEach(elem => elem.style.width = slid_width + 'px');
	render_slide();
};

window.addEventListener('resize', changeSizes);
changeSizes();

slid_film.append(...film_elem);



slid_trigger_left.addEventListener('click', ()=>{
	if (sliderIndex > 0){
		sliderIndex--;
	}else{
		sliderIndex = imgClient.length - 1;
	}
	render_points();
	render_slide()
});
slid_trigger_right.addEventListener('click', ()=>{
	if (imgClient.length - 1 > sliderIndex){
		sliderIndex++;
	}else{
		sliderIndex = 0;
	}
	render_points();
	render_slide()
});

const ulElems = document.createElement('ul');
	ulElems.classList.add('slider-points');

	ulElems.append(...imgClient.map((_, index)=>{
		const elem = document.createElement('li');

		elem.addEventListener('click', event=>{
			const liElem = event.target;
			const liList = [...liElem.parentNode.children];
			sliderIndex = liList.indexOf(liElem);
			render_points();
			render_slide();
		});
		return elem;
	}));
	slid_container.append(ulElems);
render_points();