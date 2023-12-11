import { MenuOne } from "../../common-components/MenuOne"
import {Button} from "../../common-components/button/Button"

export function MyAcoount() {
    return (
        <>
        <MenuOne></MenuOne> 
        <h1>Minha Conta</h1>
        <div className="main_div">
            <div className="photo_edit">
                <div>Foto</div>
                <a>Editar</a>
            </div>

            <div className="edit_name">
                <h3>Nome</h3>
                <p>Daniel Ribeiro</p>
            </div>

            <div className="edit_cpf">
                <h3>CPF</h3>
                <p>450.920.038-735</p>
                <a>Editar</a>
            </div>
            
            <div className="edit_celular">
                <h3>Celular</h3>
                <p>(19) 954222841</p>
                <a>Editar</a>
            </div>

            <div className="edit_email">
                <h3>Email</h3>
                <p>d.ribeiro@gmail.com</p>
                <a>Editar</a>
            </div>

            <div className="edit_address">
                <h3>Nome</h3>
                <p>Avenida Tocantis 256</p>
                <a>Editar</a>
            </div>

            <div className="close_account">
                <a>Encerrar conta</a>
            </div>

        </div> 
        </>

    );
  }
  