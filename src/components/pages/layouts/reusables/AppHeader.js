import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../../../actions';

const AppHeader = ({permission, logout}) =>
{
    const {pathname} = useLocation();
    const isLogin = pathname !== '/login';

    const header = 
    (
        <>
        {
            isLogin &&
            <div className="ui secundary menu">
                <Link to='/' className={`item ${pathname === '/' ? 'active' : '' }`}>Home</Link>
                { permission === 'administrator' && <Link to='/estabelecimento/criar' className={`item ${pathname === '/estabelecimento/criar' ? 'active' : '' }`}>Estabelecimentos</Link>}
                { permission !== 'healthOrganization' && <Link to='/agendamento' className={`item ${pathname === '/agendamento' ? 'active' : '' }`}>Agendamentos</Link>}
                { permission === 'healthOrganization' && <Link to='/relatorio/gerar' className={`item ${pathname === '/relatorio/gerar' ? 'active' : '' }`}>Relatórios</Link>}
                <div className="right menu">
                    <a className={`item`} onClick={logout}>Sair</a>
                </div>
            </div>
        }
        </>
    )

    return header;

}

const actions = { logout };
const mapStateToProps = ({auth}) => ({permission: auth.permission});
export default connect(mapStateToProps, actions)(AppHeader); 