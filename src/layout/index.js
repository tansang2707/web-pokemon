import { Layout } from 'antd'
import SiderCustom from '../components/Sider'
import HeaderCustom from '../components/Header'

import './index.scss'

const { Header, Footer, Sider, Content } = Layout;

const DefaultLayout = ({
    Component
}) => {
    return (
        <Layout className="wrap-screen">
            <Header>
                <HeaderCustom />
            </Header>
            <Layout>
                <Sider>
                    <SiderCustom />
                </Sider>
                <Content>
                    <Component />
                </Content>
            </Layout>
            <Footer>POKEMON</Footer>
        </Layout>
    )
}

export default DefaultLayout