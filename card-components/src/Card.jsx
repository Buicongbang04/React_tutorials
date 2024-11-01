import profilePic from './assets/profile.jpg';

function Card(){
    return (
        <div className="card">
            <img width={200} 
            height={200} 
            src={profilePic} 
            alt="My profile picture" 
            className='card-image'/>
            <h2 className='card-title'>BangBui</h2>
            <p className='card-text'>I learn how to design FrontEnd</p>
        </div>
    );
}

export default Card;