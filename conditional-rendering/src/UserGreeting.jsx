import PropTypes from 'prop-types';


function UserGreeting(props) {
    const welcomeMessage = <h2 className="welcome-message">Welcome back, {props.username}!</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue!</h2>;
    

    return (
        props.isLoggedIn ? welcomeMessage : loginPrompt
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
};

export default UserGreeting;





