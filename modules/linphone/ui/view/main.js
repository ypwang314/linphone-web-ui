/*!
 Linphone Web - Web plugin of Linphone an audio/video SIP phone
 Copyright (c) 2013 Belledonne Communications
 All rights reserved.
 

 Authors:
 - Yann Diorcet <diorcet.yann@gmail.com>
 
 */

/*globals jQuery,linphone*/

linphone.ui.view.main = {
	init: function(base) {
		linphone.ui.view.main.uiInit(base);
	},
	uiInit: function(base) {
		base.find('> .content .view > .main').data('linphoneweb-view', linphone.ui.view.main);
	},
	translate: function(base) {
		
	},
	
	/* */
	show: function(base) {
		linphone.ui.menu.show(base);
	},
	hide: function(base) {
	}
};