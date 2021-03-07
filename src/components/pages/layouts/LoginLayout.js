import React, { useState } from 'react';
import './styles/styles.css';

export default ({onLogin}) =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) =>
    {
        e.preventDefault();
        onLogin(email, password);
    }

    const layout =
    (
        <div className="login">
            <form className="ui form" onSubmit={submitForm}>
                <h1>Bem vindo!</h1>
                <div className="field">
                    <label>E-mail</label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="field">
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="ui button primary" type="submit" onClick={submitForm}>Entrar</button>
            </form>
        </div>
    )

    return layout;
}