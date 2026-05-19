<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método não permitido.';
    exit;
}

$email = trim($_POST['email'] ?? '');
$password = $_POST['senha'] ?? '';

if ($email === '' || $password === '') {
    echo 'E-mail e senha são obrigatórios.';
    exit;
}

try {
    $stmt = $pdo->prepare('SELECT id, full_name, password_hash FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        echo 'E-mail ou senha inválidos.';
        exit;
    }

    echo 'Login realizado com sucesso. Bem-vindo, ' . htmlspecialchars($user['full_name'], ENT_QUOTES, 'UTF-8') . '!';
    exit;
} catch (PDOException $e) {
    http_response_code(500);
    echo 'Erro ao verificar login. Tente novamente mais tarde.';
    exit;
}
