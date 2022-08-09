let car1 = {
  carname: "sonata",
  ph: 200,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let car2 = {
  carname: "bmw",
  ph: 200,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let car3 = {
  carname: "fiat",
  ph: 100,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let cars = [car1, car2, car3];

/**
 * 자동차에 개별 이름을 출력하고 엔진을 시동 시키세요
 * 자동차에 bmw 라는 차량이 있으면 이름을 출력하고 엔진을 종료 시켜주세요
 * array.map() 함수를 활용
 */

cars.map((element) => {
  const { carname, ph } = element;
  /**
   * const carname = element.carname;
   * const ph = element.ph;
   */
  if (carname === "bmw") {
    console.log(`${carname} 는 ${ph} 마력입니다.`); //템플릿 리터럴 표현
    //tab 위에 `
    element.stop();
  } else {
    console.log(carname + "는" + ph + " 마력 입니다");
    element.start();
  }
});

// if({변수명} === "bmw"){ 조건을 만족하는 경우 실행 }
// else { 그렇지 않은경우 }
