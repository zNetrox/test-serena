<?php
$origin = $_SERVER['HTTP_ORIGIN'] ?? '*';
header("Access-Control-Allow-Origin: $origin");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// DAL
require_once('model/dal.class.php');

$route = $_GET['route'] ?? '';

const _ROUTES = array(
  ''                => 'medicament',
  'medicament/list' => 'medicament',
);

if (!array_key_exists($route, _ROUTES)) {
  throw new Exception("Bad route : '" . $route . "'");
  exit(-1);
}

$_controllerName = _ROUTES[$route];

require_once('controller/' . $_controllerName . '.ctrl.php');
exit(0); 