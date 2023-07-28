export default function ProfileCard({ title, userName, image, description }) {
    // const { title, handle } = props;

    return (
        <div className="card">
            <div class="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="logo"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{userName}</p>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
        </div>
    )
}


// style = {{ height: '40vh', width: '100%', background: 'skyblue', textAlign: 'center', marginTop: '1rem' }}
// style = {{ width: '50%', height: '50%', objectFit: 'contain', marginTop: '1rem', marginBottom: '1rem' }}