// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import InterationTwoToneSvg from '@ant-design/icons-svg/lib/asn/InterationTwoTone'

export default {
  name: 'InterationTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: InterationTwoToneSvg } },
      children
    )
};