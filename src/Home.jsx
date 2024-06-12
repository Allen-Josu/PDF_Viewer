import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate()

    const pdf = () => {
        navigate("/student-declaration")
    }
    return (
        <>
            <button className="btn btn-success" target="_blank" onClick={pdf}>
                PDF Viewer
            </button>
        </>
    )
}

export default Home