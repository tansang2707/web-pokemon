import { useHistory } from 'react-router-dom'
import './index.scss'

const Header = () => {
    const history = useHistory()
    return (
        <div className="wrap-header">
            <h1 onClick={() => history.push('/')}>Pokemon</h1>
        </div>
    )
}

export default Header