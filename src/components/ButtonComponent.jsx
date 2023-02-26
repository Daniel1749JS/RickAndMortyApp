import buttonMoreInfo from '../styles/buttonMoreInfo.css';

export const ButtonComponent = ({ functionClick }) => {

    return (
        <button className='btnMoreInfo' onClick={functionClick} >More info</button>
    );
    
}
