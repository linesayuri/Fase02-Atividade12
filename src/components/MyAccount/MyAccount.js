import { MenuOne } from "../../common-components/MenuOne"
import {Button} from "../../common-components/button/Button"

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
        </div> 
        </>

    );
  }
  