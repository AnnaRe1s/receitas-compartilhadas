function TextInput(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
            <input
                name={props.name}
                className="form-control"
                type={props.type}
                imageUrl={props.imageUrl}
                preparation_time={props.preparation_time}
                portions={props.portions}
                level={props.level}
                ingredients={props.ingredients}
                preparationMethod={props.preparationMethod}
                id={props.id}
                onChange={props.onChange}
            />
            {props.hint ? <div className="form-text">{props.hint}</div> : null}
        </div>
    );
}
export default TextInput;