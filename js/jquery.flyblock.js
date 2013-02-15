(function($){
    jQuery.fn.flyblock = function(options){
        options = $.extend({
            zIndex: 1000,
            top: '100px',
            offset: 200,
            fadeSpeed: 400
        }, options);
        var $window = $(window);
        return this.each(function() {
            $self = $(this);
            $self.css({
                'z-index' : options.zIndex,
                top : options.top
            });
            toggle();
            $window.scroll(function(){
                toggle();
            });
            function toggle(){
                if($window.scrollTop() >= options.offset){
                    if(!$self.is(':visible')){
                        $self.fadeIn(options.fadeSpeed, function(){$self.trigger('flyblock.fadeIn');});
                    }
                }else{
                    if($self.is(':visible')){
                        $self.fadeOut(options.fadeSpeed, function(){$self.trigger('flyblock.fadeOut');});
                    }
                }
            }
        });
    };
})(jQuery);