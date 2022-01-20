
const InputGroupText = (props) => {

    const handleName = (event) => {
        event.preventDefault()
        props.handleName(event.currentTarget.value);


    }


    return (
        <div className="input-group-text">
            <label className="label-text" htmlFor="name">
                Escribe un nombre:
            </label>
            <input
                className="input-text"
                type={props.text}
                name={props.name}
                id={props.name}
                placeholder="María García"
                value={props.name}
                onChange={props.handleName}
            />
        </div>
    );
};

export default InputGroupText;