// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CiTwoToneSvg from '@ant-design/icons-svg/lib/asn/CiTwoTone'

export default {
  name: 'CiTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CiTwoToneSvg } },
      children
    )
};