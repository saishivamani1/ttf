import axios from "axios"
import { useState } from "react"

function Reg() {
    const [data, setdata] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeName = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        try {
            const res = await axios.post("http://localhost:8080/register", data);
            alert(res.data);
        } catch (xyz) {
            alert(xyz.response?.data || "Error");
        }
    };

    return (
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
            <h2>Register</h2>
            <input onChange={changeName} name="username" placeholder="Username" />
            <input onChange={changeName} name="email" placeholder="Email" />
            <input onChange={changeName} name="password" type="password" placeholder="Password" />
            <button onClick={submit}>Submit</button>
        </div>
    );
}

export default Reg;