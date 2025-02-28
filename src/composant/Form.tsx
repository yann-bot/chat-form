




interface ButtonProps{
    icon: React.ReactNode;
    title: string;
    paragraph: string;
    onClick: () => void
}



export const ButtonIcon = (p: ButtonProps) => {
    return (
        <div onClick={p.onClick}>
            <h2>Number of employees</h2>
            <div>{p.icon}</div>
            <div className="text">
                <h3>{p.title}</h3>
                <p>{p.paragraph}</p>
            </div>
        </div>
    )
}