import React, {useState} from 'react';
import css from "./Login.module.sass";
import api from "../../../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        api.post('/login', {
            email,
            password
        }).then(res => {
            if (res.status === 200) {
                console.log('success');
            } else {
                console.log(res.data);
            }
        }).catch(e => {
            console.log(e);
        })
    };
    return (
        <section className={css.Block}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email"
                           value={email}
                           className={css.UserIcon}
                           onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"
                           className={css.UserIcon}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                </div>
                <section>
                    <button>Login</button>
                </section>
            </form>
        </section>
    );
};

export default Login;