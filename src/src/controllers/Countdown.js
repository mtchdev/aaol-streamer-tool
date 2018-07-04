module.exports = {
    down: function(slug){
        let res = this.parse(slug);

        let date = new Date(1000 * res).toISOString().substr(11, 8)
        return date;
    },

    parse: function(slug){
        let a = slug.split(':');
        let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
        seconds--;
        return seconds;
    }
}