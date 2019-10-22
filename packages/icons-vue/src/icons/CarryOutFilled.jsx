// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import CarryOutFilledSvg from '@ant-design/icons-svg/lib/asn/CarryOutFilled'

export default {
  name: 'CarryOutFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarryOutFilledSvg } },
      children
    )
};