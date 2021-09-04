import React from 'react'
import AssigneeInput from './AssigneeInput'

const App = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center ">
			<header className="text-3xl text-cra-primary font-craFont">
				<h1>Zuri Chat Reminder Plugin</h1>
				<p>
					Reminder plugin for the open-source{' '}
					<a href="https://zuri.chat" className="text-cra-link">
						Zuri Chat
					</a>
				</p>
			</header>
			<div className="text-left pt-7">
				<AssigneeInput />
			</div>
		</div>
	)
}

export default App
