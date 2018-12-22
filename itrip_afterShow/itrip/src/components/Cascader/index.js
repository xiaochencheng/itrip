import provinces from './china-division/dist/provinces.json';
import cities from './china-division/dist/cities.json';
import areas from './china-division/dist/areas.json';

/*
目的地组件使用说明：

 调用方式：
引起组件：
import { Cascader } from 'antd'
import options from 'components/Cascader'
调用
<Cascader options={options} />

参考:
https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17

*/

areas.forEach((area) => {
  const matchCity = cities.filter(city => city.code === area.parent_code)[0];
  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code,
    });
  }
});

cities.forEach((city) => {
  const matchProvince = provinces.filter(province => province.code === city.parent_code)[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children,
    });
  }
});

const options = provinces.map(province => ({
  label: province.name,
  value: province.code,
  children: province.children,
}));

export default options;

