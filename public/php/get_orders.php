<?php
// Вывод заказов из БД

$host = 'localhost';
$db   = 'antique_shop';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    echo json_encode(['error' => 'Ошибка подключения к базе данных']);
    exit;
}

// Получаем Email пользователя из запроса
$email = $_GET['email'] ?? '';

if (empty($email)) {
    echo json_encode(['error' => 'Email не указан']);
    exit;
}

try {
    // Ищем заказы по email, который указывали при оформлении
    $stmt = $pdo->prepare("
        SELECT * FROM orders 
        WHERE customer_email = ? 
        ORDER BY id DESC
    ");
    $stmt->execute([$email]);
    $orders = $stmt->fetchAll();
    
    echo json_encode($orders);
    
} catch (PDOException $e) {
    echo json_encode(['error' => 'Ошибка при получении заказов']);
}
?>