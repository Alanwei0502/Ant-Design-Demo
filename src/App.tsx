import { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider, Layout } from 'antd'
import Header from 'layouts/Header'
import Main from 'layouts/Main'
import LeftMenu from 'layouts/LeftMenu'
import { getLangKey, getAntdLang, setLangKey } from 'i18n/antdLocale';


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [lang, setLang] = useState(getLangKey());
  const locale = getAntdLang(lang);
  const toggle = () => {
    setCollapsed(() => !collapsed);
  }

  useEffect(() => {
    setLangKey(lang);
  }, [lang])

  return (
    <ConfigProvider locale={locale}>
      <Layout>
        <BrowserRouter>
          <LeftMenu collapsed={collapsed} />
          <Layout>
            <Header collapsed={collapsed} toggle={toggle} setLang={setLang} lang={lang} />
            <Main />
          </Layout>
        </BrowserRouter>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
