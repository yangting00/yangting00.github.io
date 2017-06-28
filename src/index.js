/**
 *  === test ===
 *
 *  created at: Wed Jun 28 2017 14:20:12 GMT+0800 (CST)
 */

`
                __
  .-----.-----.|  |.---.-.
  |-- __|  _  ||  ||  _  |
  |_____|_____||__||___._|

  with ♥︎ by lianjia-fe
`

import './styles/common.styl'

import zola from 'zola'
import routes from './routes'

zola
  .set('env', process.env.NODE_ENV)
  .render(routes, '#root')