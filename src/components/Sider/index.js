import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import actions from '../../redux/actions'

import './index.scss'

const { SubMenu } = Menu;

const Sider = () => {
    const dispatch = useDispatch();
    const [listVersion, setListVersion] = useState([])
    const [listGeneration, setListGeneration] = useState([])
    const [listLocation, setListLocation] = useState([])
    const [listItem, setListItem] = useState([])

    const initListVersion = async () => {
        const response = await dispatch(actions.getListVersion())
        if (response.ok) {
            const { results } = response.data
            setListVersion(results)
        }
    }

    const initListGeneration = async () => {
        const response = await dispatch(actions.getListGeneration())
        if (response.ok) {
            console.log(response)
            const { results } = response.data
            setListGeneration(results)
        }
    }

    const initListLocation = async () => {
        const response = await dispatch(actions.getListLocation())
        if (response.ok) {
            const { results } = response.data
            setListLocation(results)
        }
    }

    const initListItem = async () => {
        const response = await dispatch(actions.getListItem())
        if (response.ok) {
            const { results } = response.data
            setListItem(results)
        }
    }

    const renderList = (listData) => {
        return listData.map(item => <Menu.Item key={item.url}>{item.name}</Menu.Item>)
    }

    useEffect(() => {
        initListVersion()
        initListGeneration()
        initListLocation()
        initListItem()
    }, [])

    return (
        <div className="wrap-slider">
            <Menu
                style={{ width: '256px' }}
                defaultSelectedKeys={['1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Game">
                    {renderList(listVersion)}
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Generations">
                    {renderList(listGeneration)}
                </SubMenu>
                <SubMenu key="sub4" icon={<SettingOutlined />} title="Locations">
                    {renderList(listLocation)}
                </SubMenu>
                <SubMenu key="sub5" icon={<SettingOutlined />} title="Items">
                    {renderList(listItem)}
                </SubMenu>
            </Menu>
        </div>
    )
}

export default Sider