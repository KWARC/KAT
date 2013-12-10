<?php

const ANNOTATIONS_DIR = "annotations/";
const ANNOTATION_FILE_EXTENSION = ".ann";
$documentId = $_POST['id'];
$rdfAnnotations = $_POST['annotations'];
$jsAnnotations = $_POST['jsannotations'];

$path = ANNOTATIONS_DIR . $documentId . ANNOTATION_FILE_EXTENSION;

file_put_contents($path, $jsAnnotations);
