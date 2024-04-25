import React, { Component } from "react";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      sum: 1000
    };
  }
  tinh(count) {
    return (count / this.state.sum) * 100 + "%";
  }
  render() {
    return (
      <div>
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Dashboard
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />Dashboard
                  </li>
                </ol>
              </div>
            </div>

      

            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>
                        Digital sales number(percent percentage of 1000
                        products)
                      </strong>
                    </h2>
                    <div className="panel-actions">
                      <a href="index.html#" className="btn-setting">
                        <i className="fa fa-rotate-right" />
                      </a>
                      <a href="index.html#" className="btn-minimize">
                        <i className="fa fa-chevron-up" />
                      </a>
                      <a href="index.html#" className="btn-close">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>
                  <div className="panel-body">
                    <table className="table bootstrap-datatable countries">
                      <thead>
                        <tr>
                          <th />
                          <th>Tên Sản Phẩm</th>
                          <th>Giá Tiền</th>
                          <th>Số Lượng Đã Bán</th>
                          <th>Hiệu Xuất</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.top_product.map((element, index) => {
                          return(
                            <tr>
                            <td>
                              <div className='home-image'>
                                <img
                                  src={element.img}
                                  
                                />
                              </div>
                              
                            </td>
                            <td>{element.name}</td>
                            <td>
  {element.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
</td>

                            <td>{element.count}</td>
                            <td>
                              <div className="progress thin">
                                <div
                                  className="progress-bar progress-bar-danger"
                                  role="progressbar"
                                  aria-valuenow="80"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: this.tinh(element.count) }}
                                />
                              </div>
                              <span className="sr-only">73%</span>
                            </td>
                          </tr>
                          ) 
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              
            
            </div>

         
            <br />
   

          </section>
          
        </section>
      </div>
    );
  }
}
export default Home;
