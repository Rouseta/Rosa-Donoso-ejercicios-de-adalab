// Componente Preview creado. He traido la función renderPyamentTypeText por props. Es decir, la he añadido como propiedades al componente que he exportado a App
const Preview = props => {

    return (
        <div className="preview">
            <h2>Tus datos son:</h2>
            <ul>
                <li>Nombre: {props.name}</li>
                <li>Email: {props.email}</li>
                <li>Región: {props.region}</li>
                <li>Método de pago:  {props.renderPaymentTypeText()}</li>
                <li>Has aceptado nuestros términos legales: {props.legalTerms === true ? 'Sí' : 'No'}</li>
            </ul>
        </div>

    );
};

export default Preview;