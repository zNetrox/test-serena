<?php
require_once('model/dal.class.php');
require_once('model/medicamentDAO.class.php');

try {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (empty($data['name']) || !isset($data['stock'])) {
        throw new Exception("Données manquantes (name ou stock).");
    }

    $model = new MedicamentDAO();
    $success = $model->addMedecine($data['name'], $data['stock']);

    echo json_encode([
        "success" => $success,
        "message" => "Médicament ajouté avec succès"
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}