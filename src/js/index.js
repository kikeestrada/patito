import {topNav} from './modules/topNav'
import {searchFilter} from './modules/searchFilter'
import {swDetecter} from './modules/swDetecter';
(()=>{
	swDetecter();
	topNav();
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();
