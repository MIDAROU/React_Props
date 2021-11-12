import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
    const fullname = props.fullname;
    const bio = props.bio;
    const profession = props.profession;
    return (
        <div>
            {props.children}
            <p>FULL NAME: {fullname}</p>
            <p>BIO: {bio}</p>
            <p>JOB: {profession}</p>
        </div>
    )
}
Profile.defaultProps={
    fullname:"NOT FOUND!",
    bio:"NOT FOUND!",
    profession:"NOT FOUND!",
}

Profile.propTypes= {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}


export default Profile
