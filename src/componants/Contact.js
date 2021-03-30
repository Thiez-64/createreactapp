import './Contact.css';


function Contact({userAvatar, firstName, lastName, status, statusOnline, statusOffline}) {
  return (
    <div className="Contact">
        <img className="avatar" src={userAvatar} />
        <div>
        <h3 className="name">{firstName} {lastName}</h3>
        <div className="status">
            <div className={status ? "status-online" : "status-offline"}></div>
            <p className="status-text">{status ? statusOnline : statusOffline}</p>
        </div>
        </div>
    </div>
  );
}

export default Contact;