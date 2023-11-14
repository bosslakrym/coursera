import React from "react"
import "../styles/Content.css"

const Content = () => {
	return (
		<div>
			<div className="top">
				<div className="leftTop">
					<h6 className="topLabel">TOP INSTRUCTOR</h6>
					<h1>Google Professional Certificates</h1>
					<div className="subHeader">
						<p>
							Gain the job-ready skills you need to launch or advance your
							career in Data Analytics, Cybersecurity, Digital Marketing &
							E-commerce, IT Support, Project Management or UX Design
						</p>
						<img
							className="googleImage"
							src="https://149396518.v2.pressablecdn.com/wp-content/uploads/2020/10/Google_logo-1.png"
						/>
					</div>
				</div>
				<div className="rightTop">
					<img
						className="headline"
						src="https://149396518.v2.pressablecdn.com/wp-content/uploads/2022/10/110821_Brittany_v2.png"
					/>
				</div>
			</div>

			<div className="secondBelow"></div>
		</div>
	)
}

export default Content
