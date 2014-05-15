<?php

    // grab the YouTube URL and convert it

    $url = $_GET['URL'];
    $output = shell_exec('sh convert.sh ' . $url );

    // grab the id of the video, build the file name
    $id = substr($url, strpos($url, '=')+1);
    $filename = $id . '.mp3';

    // grab any tags and update the MP3 metadata

    $title  = $_GET['TITLE'];
    $artist = $_GET['ARTIST'];
    $album  = $_GET['ALBUM'];
    $genre  = $_GET['GENRE'];

    $output = shell_exec('sh tag.sh "' . $filename . '" "' . $title . '" "' . $artist . '" "' . $album . '" "' . $genre . '"');

?>
