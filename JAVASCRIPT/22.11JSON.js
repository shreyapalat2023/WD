// Convert JSON into js Object


// json object
const jsonData = '{ "name": "John", "age": 22 }';

const jsObject = JSON.parse(jsonData);
console.log(jsObject);

// Convert jsObject to JSON

const jsObj = {
    "name": "John",
    "age": 22,
    "gender": "male"
}

const jsonString = JSON.stringify(jsObj);
console.log(jsonString);