import './styles.scss'

const Button = ({ colour, clickFn, children }) => {
    const colours = {
        green: 'button--green',
        blue: 'button--blue',
    }

return <button onClick={clickFn} className={colours[colour]}>{children}</button>

}

export default Button;