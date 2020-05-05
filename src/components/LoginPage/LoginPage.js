import React, { useEffect } from 'react';
import './LoginPage.css';

export default function LoginPage() {
	const icons = ['facebook', 'vk', 'twitter', 'google'];

	useEffect(() => {
		document.querySelector('title').innerText = 'Login Page';
	}, []);

	return (
		<>
			<div className='gridContainer'>
				<div className='leftSidePic'></div>
				<div className='rightSideLogin'>
					<div className='welcome'>
						<div className='top'>
							<button>Sign in</button>
						</div>
						<div className='middle'>
							<span className='welcomeBack'>welcome back</span>
							<h1>
								Login to your personal <br /> cabinet
							</h1>
						</div>
						<div className='bottom'>
							<span className='socialNetworks'>Social networks</span>
						</div>
					</div>
					<div className='login'>
						<div className='top'>
							<button>Sign up</button>
						</div>
						<div className='middle'>
							<form>
								<input type='text' placeholder='E-mail or Phone' />
								<input type='password' placeholder='Password' />
							</form>
							<div className='lowerMiddle'>
								<button>
									<span>Login</span>
									<ion-icon name='log-in'></ion-icon>
								</button>
								<div className='recoverPass'>
									<a href='#' className='recoverPassBtn'>
										Recovery Password
									</a>
								</div>
							</div>
						</div>
						<div className='bottom'>
							<div className='icons'>
								{icons.map((i) => (
									<a href='#'>
										<ion-icon name={`logo-${i}`}></ion-icon>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
