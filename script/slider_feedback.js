const feedbackElem = document.querySelector('#slider_feedback')
const feetbackInfo = [
	{
		id: Date.now(),
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		foto: 'face1.jpg',
		name: 'Иванов Иван',
		post: 'Директор, ООО "Гвоздик"'
	},
	{
		id: Date.now(),
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		foto: 'face2.jpg',
		name: 'Перунова Клавдия',
		post: 'Коммерческий директор, ADIDAS Ltd.'
	},
	{
		id: Date.now(),
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		foto: 'face3.jpg',
		name: 'Иванов Иван',
		post: 'Директор'
	},
	{
		id: Date.now(),
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		foto: 'face4.jpg',
		name: 'Иванов Иван',
		post: 'Директор'
	}
];
let feedbackIndex = 0;

const films_feedback = document.createElement('div');
const btn_feedback = document.createElement('div');
const triggerAll = document.createElement('div');
const trigger_left = document.createElement('div');
const trigger_right = document.createElement('div');
const trigger_point = document.createElement('div');
trigger_left.innerHTML = '<';
trigger_right.innerHTML = '>';
films_feedback.classList.add('films_feedback');
triggerAll.classList.add('slider-trigger', 'slider-triger-add');
btn_feedback.classList.add('btn_feedback');
triggerAll.append(trigger_left, trigger_right);
btn_feedback.append(trigger_point, triggerAll);
feedbackElem.append(films_feedback, btn_feedback);


const shot_elem = feetbackInfo.map(values=>{
	const shot_width = feedbackElem.offsetWidth;
	const shot_feedback = document.createElement('div');
	const text_feedback = document.createElement('div');
	const p_feetback = document.createElement('p');
	const foto_info = document.createElement('div');
	const img_foto = document.createElement('img');
	const blockName = document.createElement('div');
	const nameUser = document.createElement('p');
	const company_feedbac = document.createElement('p');

	shot_feedback.style.width = shot_width + 'px';
	img_foto.src = mediaPath+values.foto;
	img_foto.style.width = '80px';
	shot_feedback.classList.add('shot_feedback');
	text_feedback.classList.add('text_feedback');
	foto_info.classList.add('foto_info');
	nameUser.classList.add('name_user');
	company_feedbac.classList.add('company_feedbac');
	p_feetback.innerText = values.text;
	nameUser.innerText = values.name;
	company_feedbac.innerText = values.post;
	blockName.append(nameUser, company_feedbac);
	foto_info.append(img_foto, blockName);
	text_feedback.append(p_feetback);
	shot_feedback.append(text_feedback, foto_info);
	return shot_feedback;
})

const render_slide_fb = ()=>{
	const slid_width = feedbackElem.offsetWidth;
	films_feedback.style.right = slid_width * feedbackIndex + 'px';

};

const render_points_fb = ()=>{
	const liLists = document.querySelectorAll('.feedback_points li');	
		liLists.forEach(t=>t.classList.remove('active'));
		liLists[feedbackIndex].classList.add('active');
};

const changeSizes_fb = ()=>{
	const slid_width = feedbackElem.offsetWidth;
	films_feedback.style.width = slid_width * feetbackInfo.length +'px';
	shot_elem.forEach(elem => {
		elem.style.width = slid_width + 'px';
		 //elem.style.height = films_feedback.offsetHeight + 'px';
		});
	render_slide_fb();
};

window.addEventListener('resize', changeSizes_fb);
changeSizes_fb();

films_feedback.append(...shot_elem);

trigger_left.addEventListener('click', ()=>{
	if (feedbackIndex > 0){
		feedbackIndex--;
	}else{
		feedbackIndex = feetbackInfo.length - 1;
	}
	render_points_fb();
	render_slide_fb()
});
trigger_right.addEventListener('click', ()=>{
	if (feetbackInfo.length - 1 > feedbackIndex){
		feedbackIndex++;
	}else{
		feedbackIndex = 0;
	}
	render_points_fb();
	render_slide_fb()
});

const ulElems_feedback = document.createElement('ul');
	ulElems_feedback.classList.add('feedback_points');

	ulElems_feedback.append(...feetbackInfo.map((_, index)=>{
		const elem = document.createElement('li');

		elem.addEventListener('click', event=>{
			const liElem = event.target;
			const liList = [...liElem.parentNode.children];
			feedbackIndex = liList.indexOf(liElem);
			render_points_fb();
			render_slide_fb();
		});
		return elem;
	}));


	trigger_point.append(ulElems_feedback);

render_points_fb();