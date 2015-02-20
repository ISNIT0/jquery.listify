(function ($) {
    $.fn.listify = function (cb) {
        this.each(function (index, select) {
            var $select = $(select);
            return $select.replaceWith($('<div>').addClass('listify').addClass($select.attr('class')).append($select.find('option').map(function (index, val) {
                return $('<div>').addClass('listifyItem').attr({
                    'onclick': $select.attr('onchange') || '',
                    'data-value': val.value
                }).click(cb).html(val.innerHTML)[0]
            })));
        });
    }
})(jQuery);
