function Button(){
    const handleClick = () => {
        console.log("Button clicked");
    }

    const handleClick2 = (name) => {
        console.log(`Button clicked by ${name}`);
    }

    const handleClick3 = (e) => {
        e.target.textContent = "OUCH!";
    }

    return (
        <>
            <button onClick={handleClick}>Click me 😀</button> <br/>
            <button onClick={(e) => handleClick3(e)}>Click me again 😀</button>
        </>
    );
}

export default Button;