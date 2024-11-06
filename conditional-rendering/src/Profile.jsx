
function Profile(){
    const url = "assets\\profile.jpg";

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <>
            <img onClick={(e) => handleClick(e)} src={url} ></img>
        </>
    )


}

export default Profile;
