import { Layout, Input, Menu, Badge, Dropdown, Select } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, NotificationOutlined, LogoutOutlined } from '@ant-design/icons'

interface props {
  collapsed: boolean;
  toggle: () => void;
}
const { Search } = Input;
const { Option } = Select;

const fakeData = [
  {
    id: 457481,
    isRead: false,
    content: '提醒您：2021/12/05 老媽生日',
  },
  {
    id: 786589,
    isRead: true,
    content: '今天還沒記到帳喔~養成好習慣，快來記帳吧',
  },
]

const Header = ({ collapsed, toggle }: props) => {

  const noticeContent = (
    <Menu>
      {fakeData.map((item: any) => {
        return (
          <>
            <Menu.Item key={item.id}>
              <div className='flex items-center'>
                {!item.isRead && <div className='w-2 h-2 rounded-full bg-red-400 mr-2' />}
                <div>{item.content}</div>
              </div>
            </Menu.Item>
            <Menu.Divider className='m-0' />
          </>
        )
      })}
    </Menu>
  );

  const userDropdownContent = (
    <Menu>
      <Menu.Item key={0}>帳號資訊</Menu.Item>
    </Menu>
  );

  const onChangeLocale = () => { }



  return (
    <Layout.Header className='flex justify-between px-1 items-center'>
      <div className='ml-4 flex items-center'>
        {collapsed
          ? <MenuUnfoldOutlined className='text-white text-xl leading-4 mr-2' onClick={toggle} />
          : <MenuFoldOutlined className='text-white text-xl leading-4 mr-2' onClick={toggle} />
        }
        <Search placeholder='請輸入關鍵字' enterButton />
      </div>
      <div className='flex text-white items-center justify-around w-64'>
        <Select
          style={{ width: '100px' }}
          onChange={onChangeLocale}
        >
          <Option key='en_US' value='en_US'>English</Option>
          <Option key='zh_TW' value='zh_TW'>中文</Option>
        </Select>

        <Dropdown overlay={userDropdownContent} trigger={['click']} placement='bottomRight' arrow>
          <UserOutlined className='text-xl text-blue-50 hover:text-blue-400' />
        </Dropdown>

        <Badge count={1} offset={[5, 5]} size='small'>
          <Dropdown overlay={noticeContent} trigger={['click']} placement='bottomRight' arrow>
            <NotificationOutlined className='text-xl text-blue-50 hover:text-blue-400 ' />
          </Dropdown>
        </Badge>

        <LogoutOutlined className='text-xl text-blue-50 hover:text-blue-400 cursor-pointer' />
      </div>
    </Layout.Header>
  )
}

export default Header
