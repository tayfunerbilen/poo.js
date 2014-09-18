Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

jQuery.fn.poo = function(conf){

    var config = jQuery.extend({
        number : null,
        speed: 6,
        before: '',
        after: ''
    }, conf);

    return this.each(function(){

        var self = this,
            $this = $(self),
            current = 0,
            number = config.number; // current number

        if ( number == null ){
            number = parseFloat( $this.data('number') );
        }

        $this.text( current );

        var interval = setInterval(function(){

            current += Math.ceil(Math.random() * ( number / config.speed ))
            if ( current > number ){
                current = number;
                clearInterval(interval);
            }

            // callback function
            if ( typeof config.callback === "function" )
                config.callback.call( self, current.format() );

            $this.text( (config.before) + current.format() + (config.after) );

        }, 100);

    });

};
