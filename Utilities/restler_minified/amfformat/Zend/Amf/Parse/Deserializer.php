<?php
 abstract class Zend_Amf_Parse_Deserializer { protected $_stream; public function __construct(Zend_Amf_Parse_InputStream $stream) { $this->_stream = $stream; } public abstract function readTypeMarker($markerType = null); } 