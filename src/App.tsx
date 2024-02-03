import { FC, useEffect } from 'react'
import { ConfigProvider, Layout, Typography, Row, Col } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import BreadcrumbsList from './components/BreadcrumbsList'

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const theme = {
  token: {
    fontFamily: 'Belleza, sans-serif',
    colorPrimary: '#ef5d30',
    colorBgContainer: '#efefef',
  },
}

interface AppProps {}

const App: FC<AppProps> = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const title: string = location.pathname.split('/').reverse()[0].toLocaleUpperCase()

  useEffect(() => navigate('/users'), [])

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{minHeight: '100vh'}}>
        <Header className='header'>
          <Row align='middle' justify='space-between'>
            <Col xs={24} sm={16}>
              <Title
                level={1}
                onClick={() => navigate('/users')}
                style={{cursor: 'pointer'}}
                data-cy='title'
              >
                Gallery
              </Title>
            </Col>
            <Col xs={24} sm={8}>
              <Title level={3} className='page-title'>{title}</Title>
            </Col>
          </Row>
        </Header>
        <Content style={{margin: '0 1rem'}}>
          <BreadcrumbsList items={location.pathname.split('/')} />
          <Outlet />
        </Content>
        <Footer style={{textAlign: 'center'}} data-cy='footer'>Made with &#x2615; for Founder & Lightning</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
