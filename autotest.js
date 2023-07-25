

//Представлены примеры тестов

pm.test("Мой первый автотест", function () {
    pm.response.to.have.status(200);
});

//тест для проверки тела ответа на наличие строки "Яндекс.Практикум"
pm.test("Body matches string Яндекс.Практикум", function () {
    pm.expect(pm.response.text()).to.include("Яндекс.Практикум"); 

pm.test("Response time is less than 50ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});
    
//устанавливает переменную среды в Postman
pm.environment.set("trainer_id", pm.response.json()[0].id); 
    
// утверждения типа значения
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.gender).to.be.a("string");
  pm.expect(jsonData.homeworld).to.be.a("string");
  pm.expect(jsonData.species).to.be.an("array");
});

//заголовка ответа, имеющего определенное значение
pm.test("Content-Type header is application/json", () => { 
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});

// тест то что объект содержится в ответе
pm.test("Object is contained", () => { 
  const expectedObject = {
    "name": "Obi-Wan Kenobi",
    "films": ["https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/4/",
        "https://swapi.py4e.com/api/films/5/",
        "https://swapi.py4e.com/api/films/6/"]
  };
pm.expect(pm.response.json()).to.deep.include(expectedObject);
});

//При загрузги данных из файла
pm.test("Email соотвествует данным из файла", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.email).to.eql(pm.iterationData.get("email_user"));
});
pm.test("Name соотвествует данным из файла", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql(pm.iterationData.get("name_user"));
});
