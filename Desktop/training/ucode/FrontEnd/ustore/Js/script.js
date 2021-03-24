
//slider 

let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,8000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

// создаем товар 
// let div = document.createElement('div');
// div.className = "tovar";
// div.innerHTML ="";
// document.body.append(div);
// document.querySelector('.tovary').append(div);



let massivObektov = [
  {brand:"Quiver", img:"img-16146194301.jpg",price:75,id:1},
  {brand:"Diplock", img:"img-16146638874.jpg",price:150,id:2},
  {brand:"Bradley", img:"img-16145511176.jpg",price:220,id:3},
  {brand:"Firewire", img:"img-16145132048.jpg",price:465,id:4},
  {brand:"Shapes", img:"img-16145081007.jpg",price:490,id:5},
  {brand:"Firewire", img:"img-16143518123.jpg",price:150,id:6},
  {brand:"Pyzel", img:"img-16139390194.jpg",price:350,id:7},
  {brand:"Anniversary ", img:"7280037170.jpg",price:900,id:8},
  {brand:"Hawaiian ", img:"2837738026.jpg",price:350,id:9},
  {brand:"Adrian", img:"2837738026.jpg",price:245,id:10},
  {brand:"Softech", img:"1109179.jpg",price:289,id:11},
  {brand:"Purton", img:"img-16141755925.jpg",price:449,id:12},
  {brand:"Merrick", img:"img-16141045103.jpg",price:250,id:13},
  {brand:"Jaxon", img:"img-16140699654.jpg",price:200,id:14},
  {brand:"Bradley", img:"img-16133206946.jpg",price:400,id:15},
  {brand:"Pyzel", img:"img-16123609656.jpg",price:620,id:16}
]

// создаем функцию для отрисовки блока фильтров и товаров 

function render(){
    let render = "";
    render += getFilters();
    render += getCatalog();
    document.querySelector('#render').innerHTML = render;
    // document.querySelector('.shop').innerHTML = "";
}
render();


function getFilters(){
  let render = `<div class="search">awdwaawdadawdadwaddddawd</div>`;

  return render;
}
// отрисовка блоков с товарами 
function getCatalog(){
  let render = `<div class="tovary" >`;
  massivObektov.forEach((item, key, arr) => {
    render += `
       <div class="tovar">
        <div class="tovar_img_box" style="background: url('./assets/boards/${item.img}')center center/cover no-repeat;">
      
        </div>
      </div>
    `;
  });
  render += '</div>';
  return render;
}