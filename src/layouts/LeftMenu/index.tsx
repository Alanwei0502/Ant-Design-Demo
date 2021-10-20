import { Menu, Layout } from 'antd'
import { Link, useHistory } from "react-router-dom"
import { HomeOutlined, DollarOutlined, LineChartOutlined, CarryOutOutlined } from '@ant-design/icons'

interface props {
  collapsed: boolean;
}


const LeftMenu = ({ collapsed }: props) => {
  const history = useHistory();

  return (
    <Layout.Sider
      collapsible
      trigger={null}
      collapsed={collapsed}
      className='h-screen'
    >
      <Menu theme="dark" defaultSelectedKeys={[history.location.pathname]}>
        <Menu.Item key="/Home" icon={<HomeOutlined />}><Link to='/Home'>首頁</Link></Menu.Item>
        <Menu.Item key="/SpendingTracker" icon={<DollarOutlined />}><Link to='/SpendingTracker'>記帳幫手</Link></Menu.Item>
        <Menu.Item key="/Investment" icon={<LineChartOutlined />}><Link to='/Investment'>投資理財</Link></Menu.Item>
        <Menu.Item key="/TodoList" icon={<CarryOutOutlined />}><Link to='/TodoList'>待辦清單</Link></Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default LeftMenu
