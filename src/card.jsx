import lavenderPic from './assets/lavenderpng-removebg-preview.png'

function Card(){
    return(
        <div className = "card">
            <img className = "lavender-pic" src={lavenderPic} alt="lavender"/>
            <h2>Lavender</h2>
            <p><u>Lavandula</u> (common name <u>lavender</u>) is a genus of 47 known species of <u>perennial</u> flowering plants in the mints family, <u>Lamiaceae</u>. It is native to the Old World, primarily found across the drier, warmer regions of mainland <u>Eurasia</u>, with an affinity for maritime breezes.</p>
        </div>
    );
}
export default Card