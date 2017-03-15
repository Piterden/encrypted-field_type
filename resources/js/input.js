$(document).on('ajaxComplete ready', function () {
    // Initialize the encrypted inputs.
    $('input[data-provides="anomaly.field_type.encrypted"]:not([data-initialized])')
        .each(function () {
            var $this = $(this);
            var $wrapper = $this.closest('div');

            $this.attr('data-initialized', '');

            $wrapper.find('[data-toggle="text"]').click(function (e) {
                e.preventDefault();

                $(this).find('i')
                    .toggleClass('fa-toggle-on')
                    .toggleClass('fa-toggle-off');

                if ($this.attr('type') === 'password') {
                    $this.attr('type', 'text').focus();
                } else {
                    $this.attr('type', 'password').focus();
                }

                return false;
            });
        });
});
