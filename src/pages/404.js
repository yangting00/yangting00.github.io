/**
 *  === page ===
 *
 *  created at: Wed Jun 28 2017 14:20:12 GMT+0800 (CST)
 */

import { React, Page } from 'zola'

export default class Index extends Page {
  render () {
    return (
      <div>
        <div className="wrap">
          <h1>404</h1> <h2>Not Found</h2>
          <p>The page you were trying to reach doesn't exist.</p>
        </div>
        <div className="footer">with <b>♥</b> by lianjia-fe</div>
      </div>
    )
  }
}