// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import YahooSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined'

export default {
  name: 'Yahoo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YahooSvg } },
      children
    )
};