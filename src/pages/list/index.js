import { React, Page } from 'zola'
import styles from './index.less'
import articleList from 'data/article'

export default class Index extends Page {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (

      <div className="cd-full-width">
        <div className="container-fluid js-tm-page-content tm-page-pad">
          <div className="row">
            <div className="tm-3-col-container">
              {
                articleList.map((v, i) => {
                  return (
                    <a href={`#/article/${v.filename}`}>
                      <div key={i} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
                          <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                            <span className="tm-text-title">{v.title}</span>
                            <span className="tm-text-author">作者:{v.author}</span>
                            <div className="tm-text">{v.summary}</div>
                          </div>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}