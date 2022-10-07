interface CardProps {
    children: JSX.Element;
}

const Card = ({children}: CardProps) => {
    return(
        <div className="rounded-lg">
            {children}
        </div>
    )
}

export default Card;