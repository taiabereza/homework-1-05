import './../css/Card.css';

const Card = ({ name, age, gender, balance, picture }) => {
    return (
        <div className="card">
            <div className="card-picture">
            <img src={picture} alt="Tania Ashmore" />
            </div>
            <div>
                <h6 className="card-name">{name}</h6>
                <p className="card-age"><i>Age:</i> {age}</p>
                <p className="card-gender"><i>Gender:</i> {gender}</p>
                <p className="card-balance"><i>Balance:</i> {balance}</p>
            </div>
        </div>
    );
}

export default Card;