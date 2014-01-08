<?php
include_once 'ChromePhp.php';
include_once 'api.php';

require_once 'Utilities/restler_minified/restler.php';

spl_autoload_register();
$r = new Restler();
$r->addAPIClass('API','');
$r->handle();
?>

