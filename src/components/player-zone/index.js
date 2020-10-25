import './styles.scss';

function PlayerZone({ image }) {
    return (
        <section className="player-zone">
            <img src={image} alt="player headshot" className="player-headshot" />
            <div className="player-options">
                <button className="btn drink">Drink</button>
                <button className="btn water">Water</button>
            </div>
        </section>
    )
}

export default PlayerZone;