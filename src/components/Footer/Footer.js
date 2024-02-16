import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// import { Link } from "react-router-dom";
export default function Footer({marginTop}) {
	return (
		<>
			<div className="Footer" style={{marginTop : (marginTop != null ? marginTop : "")}}>
			<div className="font-montserrat p-0 m-0 w-full">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-lg-5 col-12 ft-1">
						<img
                            src="https://github.com/melencholicmice/Reverberance2022/assets/99478938/d0aadcea-5018-4f9f-b585-007e0484c54a"
                            alt="Celesta-Icon"
                        />
							<div className="col-md-6 col-lg-4 col-12 ft-3">
							<h3>Contact:</h3>
							<a href="mailto:ace@iitp.ac.in" >
								ace@iitp.ac.in
							</a>
							{/* <p>
								
								Patna, Bihar
							</p> */}
						</div>
							<div className="footerIcons">
                  <a href="https://www.iitp.ac.in/ace/" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
									
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>
									</i>
								</a>
								<a href="https://youtube.com/@aceiitp5012" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
									
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
											<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
										</svg>
									</i>
								</a>

								<a href="https://instagram.com/ace_iitp/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
											<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
										</svg>
									</i>
								</a>
								<a href="https://linkedin.com/company/ace-iit-patna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
									<i className="">
										<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
											<path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
										</svg>
									</i>
								</a>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 col-12 ft-2">
							<h3>Direct Links</h3>
							<ul>
								<li className="nav-item">
									{/* <a href="/events-page">Events</a> */}
									<Link to="/events-page">EVENTS</Link>
								</li>
								<li className="nav-item">
									{/* <a href="/page1">Workshops</a> */}
									<Link to="/Team">OUR TEAM</Link>
								</li>
								{/* <li className="nav-item">
									<a href="/ca">CA program</a>
								</li> */}
								<li className="nav-item">
									{/* <a href="/sponsors">Sponsors</a> */}
									<Link to="/sponsors">SPONSORS</Link>
								</li>
								
							</ul>
						</div>
										</div>
				</div>
			</div>
			</div>
		
		</>
	);
}
