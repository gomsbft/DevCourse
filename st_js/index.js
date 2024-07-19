//객체 선언 및 불러오기
let product = {
  제품명: '7D 건조 망고',
  유형: '당절임',
  성분: '망고, 설탕',
  원산지: '필리핀'
}

console.log(product['제품명']);

for(let i in product) {
  console.log(i + ':' + product[i]);
}

let person = {
  name: '한지원',
  eat: function(food) {
    console.log(this.name + '이 ' + food + '를 먹습니다.');
  }
}

person.eat('돈가스');