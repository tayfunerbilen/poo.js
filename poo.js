Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
jQuery.fn.poo = function(number){
    
    return this.each(function(){

        var $this = $(this),
            current = 0; // current number
            
        if ( typeof number == 'undefined' ){
            var number = parseFloat( $this.data('number') );
        }
            
        $this.text( current );
        
        var interval = setInterval(function(){
            
            current += Math.ceil(Math.random() * ( number / 5 ))
            if ( current > number ){
                current = number;
                clearInterval(interval);
            }
            
            $this.text( current.format() );
            
        }, 100);
        
    });

};
