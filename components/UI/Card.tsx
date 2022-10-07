interface CardProps {
    children: JSX.Element | JSX.Element[];
}

const Card = ({children}: CardProps) => {
    return(
        <div className="rounded-lg shadow-2xl drop-shadow-2xl p-3 h-full">
            {children}
        </div>
    )
}

export default Card;