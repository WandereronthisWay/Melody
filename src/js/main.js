jQuery(document).ready(function($) {
var currentFloor = 2; /*переменная, где хранится текущий этаж*/
var floorPath = $(".home-image path") /*каждый отдельный этаж в svg*/
var counterUp = $('.counter-up'); /*Кнопка увеличения этажа*/
var counterDown = $('.counter-down'); /*Кнопка уменьшения этажа*/

/* Функция при наведении мышкой на этаж*/
	floorPath.on('mouseover', function() {
		floorPath.removeClass('current-floor'); /*Удаляем подсветку у этажей*/
		currentFloor = $(this).attr("data-floor"); /*получаем значение текущего этажа*/
		$(".counter").text(currentFloor); /* Записываем значение этажа в счетчик*/
	})

	/*Отслеживаем клик по кнопке вверх */
	counterUp.on("click", function () {
 if (currentFloor < 18) { /*Пошел цикл, значение не больше 18 этажа*/
 	currentFloor++;
  usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
 	useGroupping: false}); /*Форматируем переменную с этажом, чтобы было 01, а не 1*/
  $(".counter").text(usCurrentFloor); /* Записываем значение этажа в счетчик*/
  floorPath.removeClass('current-floor'); /*Удаляем подсветку (активный класс) у этажей*/
  $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); /*подсвечиваем текущий этаж*/
 }
	})

/* Для кнопки вниз все аналогично*/
 counterDown.on("click", function () {
 	if (currentFloor > 2) {
 		currentFloor--;
 		usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2,
 	 useGroupping: false});
  $(".counter").text(usCurrentFloor);
  floorPath.removeClass('current-floor');
  $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
 	}
 })

});

/*Аналитика по JS
1. Создаем файл main.js
2. Вводим переменную
3. Перед вводом переменной создаем рабочий файл JQuery
4. К переменной привязываем $ (наверно это действие) с параметром внутри
5. Создаем модуль управления переменной, причем в него вкладываем значение ('click' -клик мышкой), 
попутно вводя функцию, в которую вносим:
  - цикл на "если"
   - условие цикла: если меньше 18 этажей, то цикл работает, если нет - то на 18 все закончится
    - добавление этажа автоматически (++)
    - спецпараметры для двоичности отображения этажа
     - нюансы для работы
      - отображение выделения только по текущему счетчику (для функционирования нужно добавить класс в css, 
      и оттуда этот класс вернуть в JS, с одновременной привязкой к каждому этажу снова через "$".  )
     - чтобы выделение не работало криво, делаем сброс параметров отображения через remove)

     ! Важно: в языке JS решение проблемы идет сразу на месте, планирование не поможет. 
     Причем, для решения следует точно знать, каким способом решать возникшую проблему. 
    
    */