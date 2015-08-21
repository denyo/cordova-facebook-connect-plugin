/*global describe, it, expect */
/*jshint -W030 */
(function () {
    'use strict';

    describe('cordova-facebook-connect-plugin', function () {

		it('should expose the plugin on the window object', function() {
			expect(window.facebookConnectPlugin).to.exist;
		});
				
    });
})();
