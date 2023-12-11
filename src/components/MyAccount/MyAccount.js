import { MenuOne } from "../../common-components/MenuOne"
import {Button} from "../../common-components/button/Button"
import { Link } from 'react-router-dom';

export function MyAcoount() {
    return (
        <>
        <MenuOne></MenuOne> 
        <h1>Minha Conta</h1>
        <div className="main_div">
            <div className="perfil">
                <div>Foto</div>
                <div>Daniel Ribeiro</div>
            </div>
            <Button>Meus Dados</Button>
            <Button>Minhas Trocas</Button>
            <Button>Minhas Participações</Button>
            <Button>Text4</Button>
            <Button>Text5</Button>

            <Link to="/my_data">Editar meu perfil</Link>

        </div> 
        </>

    );
  }
  