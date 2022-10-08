interface ButtonPropsType {
    text: string,
    btnFunction: Function,
}   

const Button = ({text, btnFunction}: ButtonPropsType) => {
    return(
        <button onClick={() => btnFunction()} type="button" className="bg-fuchsia-600 rounded-sm py-1 px-2 shadow-md mb-4">
            {text}
        </button>
    )
}

export default Button;