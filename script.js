// - fetch data from this API: https://jsonplaceholder.typicode.com/users parsed it that each 
// object have only four props like id, name, username and email and write this array into users.json

const fs = require('fs').promises;

async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      const userData = [];
      users.map((user) => (
          userData.push({id: user.id, 
            name: user.name,
             username: user.username,
              email: user.email})
      ));
  
      await fs.writeFile('userData.json', JSON.stringify(userData));
      console.log('success');
  
    } catch (error) {
      console.error( error);
    }
  }
  
  getData();




// - write a random text in file then read this data and count how many words are there


// const fs = require('fs').promises;

const text = "Love Looks Not With The Eyes, But With The Mind; And Therefore Is Winged Cupid Painted Blind";

async function countWords() {
  try {
    await fs.writeFile("text.txt", text);

    const newFile = await fs.readFile("text.txt", "utf-8");
    const nums = newFile.split().length;
    console.log(`${nums}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

countWords();






// - read users json data then filter them older than 18 years and rewrite this data
const usersData=[
    {"id": 1, "name": "giorgi",  "email": "giorgi@example.com", "age": 25},
    {"id": 2, "name": "ani ",  "email": "ani@example.com", "age": 17},
    {"id": 3, "name": "salome ", "email": "salome@example.com", "age": 19},
    {"id": 3, "name": "saba ",  "email": "saba@example.com", "age": 10},
    {"id": 3, "name": "gela ", "email": "gela@example.com", "age": 45}

  ]
  


async function NewData() {
    try {
        await fs.writeFile('usersData.json', JSON.stringify(usersData))
    
        const users = await fs.readFile('usersData.json', 'utf-8')
        const result = JSON.parse(users).filter(e => e.age > 18)
      
        await fs.writeFile('newUsersData.json', JSON.stringify(result))
    
    }catch (error) {
        console.log(error)
    }
    }
    
    NewData()