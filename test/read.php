<?php
const ANNOTATIONS_DIR = "annotations/";
const ANNOTATION_FILE_EXTENSION = ".ann";
const DOCUMENT_FILE_EXTENSION = ".kdoc";

$documentId = $_GET['documentId'];

$annotationsFilePath = ANNOTATIONS_DIR . $documentId . ANNOTATION_FILE_EXTENSION;
$documentFilePath = ANNOTATIONS_DIR . $documentId . DOCUMENT_FILE_EXTENSION;
$jsAnnotations = json_decode(file_get_contents($annotationsFilePath));
$document = file_get_contents($documentFilePath);

$return = array(
    "annotations" => $jsAnnotations,
    "document" => $document
);

print json_encode($return);
