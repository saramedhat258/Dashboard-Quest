
function Button({handleClick,btnName,className}) {
    return (
        <button onClick={handleClick} type="submit" className={`${className} px-4 font-semibold py-2 rounded-lg text-white cursor-pointer`}>
            {btnName}
        </button>
    )
}

export default Button