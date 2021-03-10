import { get } from 'lodash'

import './detail.scss'

const Detail = ({ pokemonDetail }) => {
    return (
        <div className="pokemon-detail">
            <div className="wrap-detail">
                <div className="left">
                    <img src={get(pokemonDetail, 'sprites.front_default')} alt="" />
                </div>
                <div className="right">
                    <p>Name: <span>{get(pokemonDetail, 'name')}</span></p>
                    <p>Height: <span>{get(pokemonDetail, 'height')}</span></p>
                    <p>Weight: <span>{get(pokemonDetail, 'weight')}</span></p>
                    <p>Abilities: {get(pokemonDetail, 'abilities').map((item, index) => {
                        if (index < get(pokemonDetail, 'abilities').length - 1)
                            return (<span>{item.ability.name}{', '}</span>)
                        return (<span>{item.ability.name}</span>)
                    })}</p>
                    <p>Forms: {get(pokemonDetail, 'forms').map((item, index) => {
                        if (index < get(pokemonDetail, 'forms').length - 1)
                            return (<span>{item.name}{', '}</span>)
                        return (<span>{item.name}</span>)
                    })}</p>
                    <p>Types: {get(pokemonDetail, 'types').map((item, index) => {
                        if (index < get(pokemonDetail, 'types').length - 1)
                            return (<span>{item.type.name}{', '}</span>)
                        return (<span>{item.type.name}</span>)
                    })}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail 