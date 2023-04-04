import { Composition } from 'remotion';
import { View } from './view/View';

import { useUserContext } from "../components/Providers/UserProvider";
import { useThemeContext } from "../components/Providers/ThemeProvider";


export const RemotionRoot: React.FC = () => {
	const {user} = useUserContext();
	const {theme} = useThemeContext();
	return (
		<>
			<Composition
				id="View"
				component={View}
				durationInFrames={482}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{
					theme: theme, 
					nickname: user,
				}}
			/>
		</>
	);
};
