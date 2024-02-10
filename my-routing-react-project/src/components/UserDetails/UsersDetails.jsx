import { useLoaderData, useNavigate } from "react-router-dom";

const UsersDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => { 
        navigate(-1);

    }
    const { id,name,email } =details
    console.log(details);
    return (
        <div>
            <h1>User Id:{id}</h1>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <button onClick={handleGoBack}>GO BACK</button>
        </div>
    );
};

export default UsersDetails;