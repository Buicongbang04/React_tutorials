// import styles from './Button.module.css';

function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return (
        // External styles
        // <button className=".button">Click me</button>
        
        // Module styles
        // <button className={styles.button}>Click me</button>

        // Inline styles
        <button style={styles}>Click me</button>
    );
}

export default Button;