/* global describe, it */
;(function() {
  'use strict';

  describe('displaying the output', function() {
    it('should display the output', function() {
      $('#displayoutput').val(1.23);
      assert.equal(displayOutput(), 1.23);
      $('#displayoutput').val(2.34);
      assert.equal(displayOutput(), 2.34);
    });
  });

})();
