import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';
import { getStorage, setStorage } from "utils/webStorage"

export const getLangKey = () => getStorage('lang', false);
export const setLangKey = (value: any) => setStorage('lang', value, false);

export const getAntdLang = (lang: string) => {
  switch (lang) {
    case 'enUS':
      return enUS;
    case 'zhCN':
      return zhCN;
    default:
      return zhCN;
  }
}

