<?php
class DAL {
    private static $instance = null;
    private PDO $db;

    private function __construct() {
        $dataSourceName = 'pgsql:host=db;port=5432;dbname=ma_base';
        $this->db = new PDO($dataSourceName, "admin", "password123", [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // pour avoir des tableaux propres a l'affichage
        ]);
    }

    public static function get(): DAL {
        if (is_null(self::$instance)) {
            self::$instance = new DAL();
        }
        return self::$instance;
    }

    public function prepare(string $query): PDOStatement {
        try {
            $stmt = $this->db->prepare($query);
            if ($stmt == FALSE) {
                die('PDO query Error on "' . $query . '"');
            }
        } catch (PDOException $e) {
            die('PDO query Error on "' . $query . '" ' . $e->getMessage());
        }
        return $stmt;
    }
}