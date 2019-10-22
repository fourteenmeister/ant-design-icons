// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import RightSquareSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined'

export default {
  name: 'RightSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSquareSvg } },
      children
    )
};