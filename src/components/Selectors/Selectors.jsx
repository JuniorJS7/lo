import "../Selectors/Selectors.css";

function Selectors(props) {
  return (
    <div className="selCont">
      <div className="selContCenter">
        <select className="first-select selectors">
          <option value="" disabled selected>
            Марка
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <select className="second-select selectors">
          <option value="" disabled selected>
            Модель
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <select className="three-select selectors">
          <option value="" disabled selected>
            Год
          </option>
          <option value="">Acura</option>
          <option value="">Chrysler</option>
          <option value="">HAVAL</option>
          <option value="">Renault</option>
          <option value="">Volvo</option>
          <option value="">Alfa Romeo</option>
        </select>
        <button>Поиск по котологу</button>
      </div>
    </div>
  );
}

export default Selectors;
