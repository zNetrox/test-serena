<?php
require_once('model/medicamentDAO.class.php');

try {
    // On récupère l'ID soit via l'URL (?id=...) soit via le body JSON
    // Ici, on va utiliser le JSON pour rester cohérent avec l'ajout
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (empty($data['id'])) {
        throw new Exception("ID manquant pour la suppression.");
    }

    $model = new MedicamentDAO();
    $success = $model->deleteMedecine($data['id']);

    echo json_encode([
        "success" => $success, 
        "message" => "Médicament supprimé"
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(["error" => $e->getMessage()]);
}