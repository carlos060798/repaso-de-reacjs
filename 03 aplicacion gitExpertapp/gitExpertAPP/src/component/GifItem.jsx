import PropTypes from 'prop-types';
 export default function GitItem({title, url,id}) {
   
    return (<>
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    
    
    </>  );
}

GitItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
