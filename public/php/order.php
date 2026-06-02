<?php
// Обработка заказа через PHP

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

// Подключение к БД
try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка подключения к базе данных']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешён']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Неверные данные']);
    exit;
}

// Валидация обязательных полей
$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$delivery = $data['delivery'] ?? 'pickup';
$comment = trim($data['comment'] ?? '');
$cart = $data['cart'] ?? [];
$total = floatval($data['total'] ?? 0);

if (empty($name) || empty($phone) || empty($cart) || $total <= 0) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Заполните имя, телефон и добавьте товары']);
    exit;
}

// Запись заказа в БД
try {
    $stmt = $pdo->prepare("
        INSERT INTO orders 
        (customer_name, customer_phone, customer_email, delivery_method, comment, total_amount, items_json) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");
    
    $stmt->execute([
        $name,
        $phone,
        $email ?: null,
        $delivery,
        $comment ?: null,
        $total,
        json_encode($cart, JSON_UNESCAPED_UNICODE | JSON_FORCE_OBJECT)
    ]);
    
    $orderId = $pdo->lastInsertId();
    
    // Логирование 
    error_log("✅ Заказ #$orderId: $name, $phone, $total ₽");
    
    echo json_encode([
        'success' => true,
        'message' => 'Заказ успешно оформлен!',
        'order_id' => (int)$orderId
    ]);
    
} catch (PDOException $e) {
    error_log("❌ Ошибка БД: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка при оформлении заказа']);
}
?>