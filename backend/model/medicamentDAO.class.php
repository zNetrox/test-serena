<?php
class MedicamentDAO {
    private DAL $dal;

    public function __construct() {
        $this->dal = DAL::get();
    }

    public function getAll(): array {
        $query = 'SELECT * FROM medicament';
        $stmt = $this->dal->prepare($query);

        $stmt->execute();
        $data = $stmt->fetchAll();

        return $data;
    }
}