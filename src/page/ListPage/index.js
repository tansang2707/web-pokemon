import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Pagination, Spin, Modal, Input, Result } from 'antd'
import { get } from 'lodash'
import Detail from '../../components/Detail'
import actions from '../../redux/actions'

import './index.scss'

const sizeOption = [10, 20, 50, 100];
const { Meta } = Card;

const ListPage = () => {
    const dispatch = useDispatch()

    const [listPokemon, setListPokemon] = useState([])
    const [total, setTotal] = useState(0)
    const [limit, setLimit] = useState(20)
    const [isLoading, setIsLoading] = useState(false)
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isVisible, setIsVisible] = useState(false)
    const [page, setPage] = useState(1)
    const [value, setValue] = useState('')
    const [timeOut, setTimeOut] = useState(0)

    const initListPokemon = async (page, limit) => {
        const params = {
            limit: limit,
            offset: limit * (page - 1)
        }
        setIsLoading(true)
        const response = await dispatch(actions.getListPokemon(params))
        if (response.ok) {
            const { results, count } = response.data
            setTotal(count)
            let arr = [];
            for (let item in results) {
                let res = await dispatch(actions.getPokemonDetail(results[item].url))
                if (res.ok) {
                    arr.push(res.data)
                }
            }
            setIsLoading(false)
            setListPokemon(arr)

        }
    }

    const handleChangePage = (page, pageSize) => {
        setLimit(pageSize)
        setPage(page)
        initListPokemon(page, pageSize)
    }

    const handleClick = (item) => {
        setPokemonDetail(item)
        setIsVisible(true)
    }

    const handleCancel = () => {
        setPokemonDetail({})
        setIsVisible(false);
    };

    const handleGetPoKemon = async (name) => {
        const response = await dispatch(actions.getPokemonByName(name))
        if (response.ok) {
            setListPokemon([response.data])
        } else setListPokemon([])
    }

    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
        if (timeOut) {
            clearTimeout(timeOut);
        }
        setTimeOut(
            setTimeout(() => {
                handleGetPoKemon(value)
            }, 500)
        );
    }

    const renderCard = (list) => {
        return list.map(item => (
            <Card
                hoverable
                className="card-item"
                onClick={() => handleClick(item)}
                key={item.name}
                cover={<img alt={item.name} src={get(item, 'sprites.front_default')} />}
            >
                <Meta title={item.name} />
            </Card>
        ))
    }

    useEffect(() => {
        initListPokemon(page, limit)
    }, [])

    return (
        <div className="wrap-list-page">
            <div className="search-bar">
                <Input
                    onChange={handleChange}
                    placeholder="Type ditto, pikachu,..."
                    value={value}></Input>
            </div>
            <Spin spinning={isLoading}>
                <div className='wrap-card'>
                    {renderCard(listPokemon)}
                </div>
                {
                    listPokemon <= 0 ? (
                        <Result
                            status="404"
                            title="404"
                            subTitle="Not Found."
                        />
                    ) : null
                }
            </Spin>
            <div className="wrap-pagination">
                <Pagination
                    current={page}
                    total={total}
                    pageSize={limit}
                    onChange={handleChangePage}
                    pageSizeOptions={sizeOption} />
            </div>

            <Modal wrapClassName="modal-infor" title="Infomation" visible={isVisible} footer={null} onCancel={handleCancel}>
                <Detail pokemonDetail={pokemonDetail} />
            </Modal>
        </div>
    )
}

export default ListPage