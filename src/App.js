import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';

export default function App() {
    return (
        <div>
            {/* <div >Personal Assistant Tools</div> */}
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard title='Alexa' userName='alex@999'
                                image={AlexaImg}
                                description='Alexa was created by amazon ' />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title='Cortana' userName='cortanax@32'
                                image={CortanaImg}
                                description='Cortana was made by Microsoft.' />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title='Siri' userName='siri@01' image={SiriImg}
                                description='Siri was made by Apple' />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

// style = {{ textAlign: 'center', fontSize: '3rem', background: 'green' }}
// style = {{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '2rem' }}