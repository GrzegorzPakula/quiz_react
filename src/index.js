import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const odpowiedzi = [];
const klucz =[
  'Real Madryt',
  'Legia Warszawa',
  'Futbol Club Barcelona',
  'Paris Saint Germain F.C.',
  'Leicester City FC',
  'Wolverhampton',
  'AS Roma',
  'FC Bayern Munchen',
  'Inter Mediolan',
  'Sevilla FC'
];
let json = {};
const baza = [
  {
    numer: 1,
    tresc: 'Tomoje pytanie',
    odp1: 'Real Madryt',
    odp2: 'Barcelona',
    odp3: 'Legia warszawa',
    odp4: 'Sevilla',
    src: 'img/1.png',
    klasa: 'tlo1'
  },
  {
    numer: 2,
    tresc: 'Tomoje pytanie',
    odp1: 'Legia Varsovia',
    odp2: 'Lech Poznan',
    odp3: 'Gornik zabrze',
    odp4: 'Legia Warszawa',
    src: 'img/2.png',
    klasa: 'tlo2'
  },
  {
    numer: 3,
    tresc: 'Tomoje pytanie',
    odp1: 'Barça',
    odp2: 'Futbol Club Barcelona',
    odp3: 'FC Barcielona',
    odp4: "FC Barcelona",
    src: 'img/3.png',
    klasa: 'tlo1'
  },
  {
    numer: 4,
    tresc: 'Tomoje pytanie',
    odp1: "PSG",
    odp2: 'Paris Saint Germain',
    odp3: 'Paris Saint Germain F.C.',
    odp4: 'Klub bogatych szejkow',
    src: 'img/4.png',
    klasa: 'tlo2'
  },
  {
    numer: 5,
    tresc: 'Tomoje pytanie',
    odp1: 'Liski',
    odp2: 'Leicester',
    odp3: 'Leicester City',
    odp4: 'Leicester City FC',
    src: 'img/5.png',
    klasa: 'tlo1'
  },
  {
    numer: 6,
    tresc: 'Tomoje pytanie',
    odp1: 'WolwerHampton',
    odp2: 'Wolverrhampton',
    odp3: 'WolWerhampton',
    odp4: 'Wolverhampton',
    src: 'img/6.png',
    klasa: 'tlo2'
  },
  {
    numer: 7,
    tresc: 'Tomoje pytanie',
    odp1: 'Rome',
    odp2: 'ROmek',
    odp3: 'Roma',
    odp4: 'AS Roma',
    src: 'img/7.png',
    klasa: 'tlo1'
  },
  {
    numer: 8,
    tresc: 'Tomoje pytanie',
    odp1: 'Bayern',
    odp2: 'Bayern Monachium',
    odp3: 'FC Bayern Monachium',
    odp4: 'FC Bayern Munchen',
    src: 'img/8.png',
    klasa: 'tlo2'
  },
  {
    numer: 9,
    tresc: 'Tomoje pytanie',
    odp1: 'Inter',
    odp2: 'MEDIOLAN',
    odp3: 'INTER MEDlOLAN',
    odp4: 'Inter Mediolan',
    src: 'img/9.png',
    klasa: 'tlo1'
  },
  {
    numer: 10,
    tresc: 'Tomoje pytanie',
    odp1: 'Sevila',
    odp2: "Sevilla",
    odp3: 'Sevilla FC',
    odp4: 'Sevila FC',
    src: 'img/10.png',
    klasa: 'tlo2'
  },
]


class PytanieNumber extends React.Component{
  render(){
    return(
      <h2>{this.props.number}</h2>
    );
  }
}
class PytanieTresc extends React.Component{
  render(){
    return(
      <p>{this.props.tresc}</p>
    );
  }
}
class PytanieInput extends React.Component{
  render(){
    return(
      <input type="radio" name={this.props.name} value={this.props.value} />
    );
  }
}
class PytanieText extends React.Component{
  render(){
    return(
      <input type="text" name={this.props.name} />
    );
  }
}

class PytanieLabel extends React.Component{
  render(){
    return(
      <label>{this.props.tresc}</label>
    );
  }
}
class PytanieImg extends React.Component{
  render(){
    return(
      <div className='img'>
      <img src={this.props.src} />
      </div>
    );
  }
}
class Pytanie extends React.Component{
  render() {
    return (
      <div className={"pytanie " + this.props.klasa} id={"pytanie"+this.props.numer}>
        <PytanieNumber number={this.props.numer} />
        {/* <PytanieTresc tresc={this.props.tresc} /> */}
        <PytanieInput name={this.props.name} value={this.props.odp1} />
        <PytanieLabel tresc={this.props.odp1} />
        <PytanieInput name={this.props.name} value={this.props.odp2} />
        <PytanieLabel tresc={this.props.odp2} />
        <PytanieInput name={this.props.name} value={this.props.odp3} />
        <PytanieLabel tresc={this.props.odp3} />
        <PytanieInput name={this.props.name} value={this.props.odp4} />
        <PytanieLabel tresc={this.props.odp4} />
        <PytanieImg src={this.props.src} />
      </div>
    );
  }
}
class Wynik extends React.Component{
  render(){
    return(
      <div className="wynik" id="wynik">
        Tutaj zobaczysz swoje odpowiedzi po sprawdzeniu wyników
        {/* <p>Zdobyłeś /10 punktów</p> */}
      </div>
    )
  }
}
class Koniec extends React.Component{
  render(){
    return(
      <div className="koniec" id="koniec">
        <p>Prześledź wyniki mistrzostw świata</p>
        <iframe src="https://www.meczyki.pl/mistrzostwa-swiata,72,liga" width={1000} height={500} ></iframe>
      </div>
    )
  }
}
class Quiz extends React.Component {
  kliknieto(){
    
    let x =0;
    let formularz = document.querySelector("form");
    // formularz.length;
    for(let i=0;i< formularz.length;i++){
      // console.log(formularz[i].value);
      if(i < 2 || formularz[i].checked){
        if(formularz[1].value.length < 1 || formularz[0].value.length < 1){
          alert('Uzupełnij imie i email');
          odpowiedzi.length = 0;
          break;
        }
        odpowiedzi.push(formularz[i].value);
      }
    }
    if(odpowiedzi.length < 12){
      alert('Uzupełnij brakujące odpowiedzi');
      odpowiedzi.length = 0;
    }else{
      console.log(odpowiedzi);
      for(let i=0;i< 10;i++){
        let kolorPytania = document.getElementById('pytanie'+(i+1));
        if(klucz[i] == odpowiedzi[i+2]){
          x++;
          kolorPytania.style.backgroundColor = 'green';
        }else{
          kolorPytania.style.backgroundColor = 'red';
        }
        kolorPytania.style.border = '1px solid black';
      }
      let a = document.getElementById('wynik');
      if(x <= 3){
        a.style.color = 'red';
      }else if(x > 3 && x <= 6){
        a.style.color = 'purple';
      }else{
        a.style.color = 'green';
      }
      a.innerHTML ="Zdobyłeś "+x+"/10 punktów";
      json = {
        name: odpowiedzi[0],
        email: odpowiedzi[1],
        odp1: odpowiedzi[2],
        odp2: odpowiedzi[3],
        odp3: odpowiedzi[4],
        odp4: odpowiedzi[5],
        odp5: odpowiedzi[6],
        odp6: odpowiedzi[7],
        odp7: odpowiedzi[8],
        odp8: odpowiedzi[9],
        odp9: odpowiedzi[10],
        odp10: odpowiedzi[11],
      };
    }

    // alert('Zdobyles: ' + x + '/10 punktów');


    
  }
  pobierz(){
    console.log('klika klika klika')
    console.log(json);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(json, null, 2)], {
      type: "application/json"
    }));
    a.setAttribute("download", "odpowiedzi.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  render() {
    return (
      <div className="quiz">
        <form>
        <PytanieLabel tresc="Podaj imie: " name="imie" />
        <PytanieText /><br /><br />
        <PytanieLabel tresc="Podaj email: " name="email" />
        <PytanieText />
        <h2>Na podstawie wyświetlonej flagi zgadnij jaki to klub</h2>
        {Array(10).fill().map((x, i) =>
        <Pytanie numer={baza[i].numer} tresc={baza[i].tresc} odp1={baza[i].odp1} odp2={baza[i].odp2} odp3={baza[i].odp3} odp4={baza[i].odp4} name={"pytanie"+baza[i].numer} src={baza[i].src} klasa={baza[i].klasa}/>
        )}
        </form>
        <div className='tlo1 przyciski'>
          <button onClick={this.kliknieto}>Sprawdź odpowiedzi</button>
          <button onClick={this.pobierz}>Pobierz odpowiedzi</button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Quiz />
    <Wynik />
    <Koniec />
  </React.StrictMode>
);
reportWebVitals();
