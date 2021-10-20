import { useState } from 'react'
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider, Layout } from 'antd'
import Header from 'layouts/Header'
import Main from 'layouts/Main'
import LeftMenu from 'layouts/LeftMenu'
import { ANTD_LANG } from 'i18n/multiLingual'

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(() => !collapsed);
  }

  return (
    <ConfigProvider>
      <Layout>
        <BrowserRouter>
          <LeftMenu collapsed={collapsed} />
          <Layout>
            <Header collapsed={collapsed} toggle={toggle} />
            <Main />
          </Layout>
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
