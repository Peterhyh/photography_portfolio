const Photo = (props) => {
    return (
        <div className='photo-container'>
            <img src={props.imgUrl} alt={props.imgAlt} />
        </div>
    );
};

export default Photo;