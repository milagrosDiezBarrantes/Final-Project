import React from "react";
import capitan from './img/capitan.jpg';

const Modal = () => {
return( 
<>
<div className="header">
		<div class="textos">
			<h1>Marvel</h1>
			<a href="#" id="abrir">Suscribete a este canal</a>
		</div>
	</div>
	<div id="miModal" class="modal">
		<div class="flex" id="flex">
			<div class="contenido-modal">
				<div class="modal-header flex">
					<h2>Marvel Plus</h2>
                    <figure class="modal__picture">
                        <img src={capitan} class="modal__img" />
                    </figure>
				</div>
				<div class="modal-body">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptatum illum temporibus voluptas debitis! </p>	
                <a href="#" class="modal__close"> Estoy de acuerdo!</a>		
				</div>
			</div>
		</div>
	</div>

    </>

    )
}

export default Modal