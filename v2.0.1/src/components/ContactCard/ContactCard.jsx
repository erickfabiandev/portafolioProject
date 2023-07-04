import './ContactCard.scss'

const ContactCard = () =>{

    return(
        <div className="container__profilecard">
            <img className="container__profilecard__img" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432994/portafolio/img-profile.jpg"/>
            <h2 className="container__profilecard__name">Erick Carrasco</h2>
            <p className="container__profilecard__description">Passionate junior full-stack web developer dedicated to creating innovative digital solutions. I thrive on collaborating on 
                challenging projects and continuously learning. My passion for web development drives me to constantly improve and deliver exceptional experiences through web and mobile applications.</p>
            <div className="container__profilecard__buttons">
                <p>contact me</p>
                <a  href="https://www.linkedin.com/in/erickfabiandev/">
                    <img className="container__profilecard__buttons--linkedin" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432993/portafolio/linkedin.svg"/>
                </a>
                <a  href="https://github.com/erickfabiandev">                    
                    <img className="container__profilecard__buttons--github" src="https://res.cloudinary.com/dkddd5aky/image/upload/v1688432993/portafolio/github.svg"/>   
                </a>
            </div>
        </div>
    )


}

export default ContactCard