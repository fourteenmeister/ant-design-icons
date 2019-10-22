// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon'
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone'

export default {
  name: 'FilterTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilterTwoToneSvg } },
      children
    )
};