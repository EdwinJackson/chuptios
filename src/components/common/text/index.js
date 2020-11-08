import './styles.scss';

const Title = ({children}) => <h1 className="heading-one">{children}</h1>
const SubHeading = ({children}) => <h2 className="heading-two">{children}</h2>
const Body = ({children}) => <p className="body">{children}</p>


export {
  Title,
  SubHeading,
  Body,
}