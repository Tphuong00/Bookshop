import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Fail = () => (
    <div className="container text-center">
    <div className="logo-404">
	<div className='null-cart'>
            <img src="/assets/images/home/logo1.gif" alt="" />
            
          </div>
		</div>
		<div className="content-404">
			<h1><b>OPPS!</b>LỖI!!</h1>
			<p>Uh... SDường như bạn đã gặp sự cố khi truy cập trang. rang bạn đang tìm kiếm đã biến mất và không còn tồn tại nữa.</p>
			<h2><Link to="/">Trở Về Trang Chủ</Link></h2>
		</div>
	</div>
)
export default Fail