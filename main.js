// id 키와 name 키를 가지는 유저 
const userDataList = [
    { id: 123, name: '곰' },
    { id: 1021, name: '사자' },
    { id: 6021, name: '여우' }
  ];
  const input = document.getElementById('input_value');
  input.addEventListener('input',findUser);


function findUser(){
  const inputValue =Number(input.value);
  const result = document.getElementById('result');

  const findName = userDataList.find((data) => data.id === inputValue);
  if(findName == null){
    result.textContent='일치하는 아이디가 없습니다.';
    return;
  }
  result.textContent = findName.name;
}