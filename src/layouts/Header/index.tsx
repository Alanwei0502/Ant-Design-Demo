import { Fragment } from 'react';
import { Layout, Input, Menu, Badge, Dropdown, Select } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, NotificationOutlined, LogoutOutlined } from '@ant-design/icons'

interface props {
  collapsed: boolean;
  lang: string;
  toggle: () => void;
  setLang: (value: string) => void;
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

const Header: React.FC<props> = ({ collapsed, toggle, setLang, lang }) => {
  

  const noticeContent = (
    <Menu>
      {fakeData.map((item: any, index: number) => {
        return (
          <Fragment key={index}>
            <Menu.Item key={item.id}>
              <div className='flex items-center'>
                {!item.isRead && <div className='w-2 h-2 rounded-full bg-red-400 mr-2' />}
                <div>{item.content}</div>
              </div>
            </Menu.Item>
            <Menu.Divider className='m-0' />
          </Fragment>
        )
      })}
    </Menu>
  );

  const userDropdownContent = (
    <Menu>
      <Menu.Item key={0}>帳號資訊</Menu.Item>
    </Menu>
  );

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
          onChange={setLang}
          defaultValue={lang}
          className='w-24'
        >
          <Option key='enUS' value='enUS'>English</Option>
          <Option key='zhTW' value='zhTW'>中文</Option>
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
