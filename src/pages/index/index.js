/**
 *  === page ===
 *
 *  created at: Wed Jun 28 2017 14:20:12 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
import styles from './index.less'

export default class Index extends Page {
  constructor(props) {
    super(props);
  }
  render () {
    let env = process.env.NODE_ENV;
    let prefix = (process.env.NODE_ENV == "development") ? "" : "https://yangting00.github.io/dist/";
    return (
      <div className="cd-hero-slider">
        <div className="cd-full-width">
          <a>
            <img className="icon" src="/favicon.jpeg" />
            <div>
            <span className="name">YangTing</span>
            </div>
          </a>
          <div className="content">
            <a href="#/list" className="container-fluid">你想知道点什么呢？？？</a>
          </div>
        </div>
      </div>
    )
  }
}