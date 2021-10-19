import { MenuEntry } from 'pok-ui'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://dex.prodax.io',
      },
      {
        label: 'Liquidity',
        href: 'https://dex.prodax.io/liquidity',
      },
    ],
  },
  {
    label: 'Staking',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'poolss',
  //  icon: 'PoolIcon',
  //  href: '/poolss',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
 {
   label: 'Farm Application',
   icon: 'NftIcon',
   href: 'https://forms.gle/SWcgmD5yWkDaEFBw9',
 },
  {
    label: 'Info',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bryfans',
      },
      {
        label: 'Bscscan',
        href: 'https://bscscan.com/token/0xcf951d41c096aa3750ee1943c9b62e3b0977fd35',
      },
    ],
  },
  //  {
  //    label: 'Audit',
  //    icon: 'AuditIcon',
  //    href: 'https://bryswap.finance/file/bry-swap.pdf',
  //  },
]

export default config
