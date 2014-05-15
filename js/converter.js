
var converter = (function () {

    var
        jqueryMap = {},
        url,
        id,
        link,
        title,
        artist,
        album,
        genre,


    setJqueryMap, init;

    setJqueryMap = function() {
        $container = $('#convert-div');
        
        jqueryMap = {
            $container : $container,
            $form      : $container.find('#convert-form'),
            $link      : $container.find('#convert-link'),
            $url       : $container.find('#URL'),
            $title     : $container.find('#TITLE'),
            $artist    : $container.find('#ARTIST'),
            $album     : $container.find('#ALBUM'),
            $genre     : $container.find('#GENRE'),
        };
    };

    init = function() {
        setJqueryMap();
        
        jqueryMap.$form.submit(function (event) {
            event.preventDefault();

            jqueryMap.$container.animate({height:"500px"});
            jqueryMap.$link.html('Please wait while we prepare your link... <img src="images/ajax-loader.gif">');

            url = jqueryMap.$url.val();
            id  = url.substring(url.indexOf('=')+1);

            title  = jqueryMap.$title.val();
            artist = jqueryMap.$artist.val();
            album  = jqueryMap.$album.val();
            genre  = jqueryMap.$genre.val();

            if (title === '')
                link = 'downloads/download.php?file='+id+'.mp3';
            else
                link = 'downloads/download.php?file='+title+'.mp3';

            $.ajax({
                url: 'downloads/convert.php',
                type: 'get',
                data: {URL:url, TITLE:title, ARTIST:artist, ALBUM:album, GENRE:genre},
                success: function (response) {
                    jqueryMap.$link.html('Thanks for waiting! <a href="'+link+'">Click here</a> to download your .mp3 file.');
                }
            });
        });
    };

    return {init : init};

}());
        
