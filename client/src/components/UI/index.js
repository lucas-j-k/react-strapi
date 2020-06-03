/*
 * 
 *  UI - reusable UI elements built with styled-system
 *  Import and combine individual component definitions
 * 
 */

import Layout from './layout';
import Typography from './typography';
import Forms from './forms';
import Buttons from './buttons';
import Lists from './lists';


export default {
	...Layout,
	...Typography,
	...Forms,
	...Buttons,
	...Lists,
}
