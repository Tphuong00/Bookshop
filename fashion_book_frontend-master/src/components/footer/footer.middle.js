	import React, { Component } from "react"

	const FooterMiddle = () => (
		<div className="footer-widget">
				<div className="container">
					<div className="row">
						<div className="col-sm-3">
							<div className="single-widget">
								<h2>Thông Tin Về Chúng Tôi</h2>
								<ul className="nav nav-pills nav-stacked ">
									<li><i className='fas fa-map-marker-alt'></i><a href="#">Hồ Chí Minh City</a></li>
									<li><i className='far fa-envelope'></i><a href="#">bookshop@gmail.com</a></li>
									<li><i className='fas fa-phone-volume'></i><a href="#">+84 986 915147</a></li>
									<li><i class="fab fa-facebook-f"></i><a href="#">bookshop</a></li>
									
								</ul>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-widget">
								<h2>Sách Về Kỹ Năng</h2>
								<ul className="nav nav-pills nav-stacked">
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Facebook marketing</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Đắc Nhân Tâm</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Nhà Giả Kim</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">1000 Câu Hỏi Vì Sao</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Cuộc Sống An Nhàn</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-widget">
								<h2>Sách Giáo Khoa</h2>
								<ul className="nav nav-pills nav-stacked">
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Tiếng Anh Lớp 12</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Toán Lớp 12</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Tiếng Việt Lớp 12</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Toán Học Lớp 12</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Vật Lý Lớp 12</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-3">
							<div className="single-widget">
								<h2>Sách Giải Trí</h2>
								<ul className="nav nav-pills nav-stacked">
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Doraemon</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Conan</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Cuộc Phiêu Lưu Của Dế Mèn</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Cuộc Tấn Công Của Titan</a></li>
									<li><i className='fas fa-long-arrow-alt-right'></i><a href="#">Thỏ Và Rùa</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="single-widget">
								<h2>Khách hàng</h2>
								<form action="#" className="form-footer container">
									<div className='row'>
									<input type="text" placeholder="Email của bạn" className='col-sm-4' />
									<button type="Submit" className="">Gửi</button>
									</div>
								
									
								</form>
								<p>Đăng Ký Gmail để nhận những thống báo mới nhất về chúng tôi...</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
	)
	export default FooterMiddle