import "../../styles/services/footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-info">
					<h3 className="footer-title">Luis Dev Studio</h3>
					<p className="footer-description">
						Modern website design and development for local businesses. A
						digital presence that converts.
					</p>
				</div>

				<div className="footer-links">
					<h4>Contact</h4>
					<ul>
						<li>
							<a href="mailto:contacto@luisdevstudio.com">
								luisjva16@gmail.com
							</a>
						</li>
						<li>
							<a
								href="https://wa.me/+584124248787"
								target="_blank"
								rel="noopener noreferrer"
							>
								Direct WhatsApp
							</a>
						</li>
					</ul>
				</div>

				{/* <div className="footer-social">
					<h4>Sígueme</h4>
					<ul>
						<li>
							<a
								href="https://www.instagram.com/luisdevstudio"
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/luisdevstudio"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</div> */}
			</div>

			<div className="footer-bottom">
				<p>
					&copy; {new Date().getFullYear()} Luis Dev Studio. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
