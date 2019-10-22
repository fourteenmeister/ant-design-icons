// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import SwapSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined'

export default {
  name: 'Swap',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SwapSvg } },
      children
    )
};