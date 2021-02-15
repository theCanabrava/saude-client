import React from 'react';
import { Link, useLocation } from 'react-router-dom'

export default () =>
{
    const {pathname} = useLocation();
    const isLogin = pathname !== '/login';
    console.log(pathname);

    const header = 
    (
        <>
        {
            isLogin &&
            <div className="ui secundary menu">
                <Link to='/' className={`item ${pathname === '/' ? 'active' : '' }`}>Home</Link>
                <Link to='/estabelecimento/criar' className={`item ${pathname === '/estabelecimento/criar' ? 'active' : '' }`}>Estabelecimentos</Link>
                <Link to='/agendamento/marcar' className={`item ${pathname === '/agendamento/marcar' ? 'active' : '' }`}>Agendamentos</Link>
                <Link to='/relatorio/gerar' className={`item ${pathname === '/relatorio/gerar' ? 'active' : '' }`}>Relatórios</Link>
                <div className="right menu">
                    <Link to='/login' className={`item`}>Sair</Link>
                </div>
            </div>
        }
        </>
    )

    return header;

}