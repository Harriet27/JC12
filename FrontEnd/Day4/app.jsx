const pics = {
    panda: "http://bit.ly/1Tqltv5",
    owl: "http://bit.ly/1XGtkM3",
    owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
    <img 
        src={pics.panda} 
        alt="Lazy Panda"
    />
);
const owl = (
    <img 
        src={pics.owl} 
        alt="Unimpressed Owl"
    />
);
const owlCat = (
    <img 
        src={pics.owlCat} 
        alt="Ghastly Abomination"
    />
);

ReactDOM.render(panda, document.getElementById('app'));
ReactDOM.render(owl, document.getElementById('app'));
ReactDOM.render(owlCat, document.getElementById('app'));