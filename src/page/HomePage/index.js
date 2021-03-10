import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, Modal } from 'antd'
import { get } from 'lodash'
import Carousel from './components/Carousel'
import Detail from '../../components/Detail'
import actions from '../../redux/actions'

import './index.scss'

const { Meta } = Card;

const HomePage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [listPokemon, setListPokemon] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isVisible, setIsVisible] = useState(false)
    const [listItem, setListItem] = useState([])

    const initListPokemon = async () => {
        const response = await dispatch(actions.getListPokemon())
        if(response.ok) {
          const { results } = response.data
          let arr = [];
          for(let item in results) {
            let res = await dispatch(actions.getPokemonDetail(results[item].url))
            if(res.ok) {
              arr.push(res.data)
            }
          }
          setListPokemon(arr)
          
        }
    }

    const initListItem = async () => {
      const response = await dispatch(actions.getListItem())
        if(response.ok){
            const { results } = response.data
            let arr = [];
          for(let item in results) {
            let res = await dispatch(actions.getItemDetail(results[item].url))
            if(res.ok) {
              arr.push(res.data)
            }
          }
          setListItem(arr)
            console.log(arr)
        }
    }

    const handleClick = (item) => {
      setPokemonDetail(item)
      setIsVisible(true)
    }

    const handleCancel = () => {
      setPokemonDetail({})
      setIsVisible(false);
    };

    const renderCard = (list) => {
      return list.map( (item, index) => (
          <Card
      hoverable
      className="card-item"
      onClick={() => handleClick(item)}
      key={item.name}
      cover={<img alt={item.name} src={get(item,'sprites.front_default')} />}
      >
      <Meta title={item.name} />
    </Card>
      ))
    }

    const renderItemCard = (list) => {
      return list.map( (item, index) => (
        <Card
    hoverable
    className="card-item"
    key={item.name}
    cover={<img alt={item.name} src={get(item,'sprites.default')} />}
    >
    <Meta title={item.name} />
  </Card>
    ))
    }

    useEffect(() => {
        initListPokemon()
        initListItem()
    },[])

    return (
        <div className="wrap-homepage">
            <div className="trailer-section">
              <Carousel />
            </div>
            <div className="pokemon-section">
              <h2>Pokemon</h2>
              <div className="btn-see-more">
                <span onClick={() => history.push('/list-page')}>{'See more >>'}</span>
              </div>
              <div className="wrap-card">
                {renderCard(listPokemon)}
              </div>
            </div>
            <div className="item-section">
                <h2>Item</h2>
                <div className="wrap-card">
                {renderItemCard(listItem)}
                </div>
            </div>
            <Modal wrapClassName="modal-infor" title="Infomation" visible={isVisible} footer={null} onCancel={handleCancel}>
                <Detail pokemonDetail={pokemonDetail} />
            </Modal>
        </div>
    )
}

export default HomePage