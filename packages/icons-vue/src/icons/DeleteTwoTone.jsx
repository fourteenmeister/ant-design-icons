// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone'

export default {
  name: 'DeleteTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DeleteTwoToneSvg } },
      children
    )
};