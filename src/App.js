import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact.js'

const homer = {
    userAvatar:
      "https://img.gentside.com/article/1024/les-simpson/homer-simpson_c25e90cb1b17d61c3ce3792aa282c40f8bde7dc6.jpg",
    firstName: "Homer",
    lastName: "Simpson",
    status: true,
    statusOnline: "Oh pinaise !",
    statusOffline: "Dinking some beers",
};
  
const marge = {
    userAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfb0Tq27N6dWCwcsHmV-yVyu48JGuMEmU5eA&usqp=CAU",
    firstName: "Marge",
    lastName: "Simpson",
    status: false,
    statusOnline: "Grrrrh",
    statusOffline: "Cooking bacon",
};

const bart = {
    userAvatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKm8giBmOzRtkOneQJaz6PoAn8SKJ26-qRYZiff-QWkJpgV1RNQ0Djcbd6sdSnzFRGANhK0jaDzlk&usqp=CAU",
    firstName: "Bart",
    lastName: "Simpson",
    status: true,
    statusOnline: "He's skating",
    statusOffline: "Eat some bacon",
};
const lisa = {
  userAvatar:"https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
  firstName:"Lisa",
  lastName:"Simpson",
  status:false,
  statusOnline: "Reading books",
  statusOffline: "Playing saxophone",
};
const maggie = {
    userAvatar:
      "https://i.pinimg.com/originals/54/2f/6f/542f6f41a37ec8055f7822a7c69949f5.jpg",
    firstName: "Maggie",
    lastName: "Simpson",
    status: true,
    statusOnline: "Tuoinck",
    statusOffline: "Tuoinck",
}

function App() {
  return (
    <div className="App">
      <Contact {...homer} />
      <Contact {...marge}/>
      <Contact {...bart}/>
      <Contact {...lisa}/>
      <Contact {...maggie} />
    </div>
  );
}

export default App;
