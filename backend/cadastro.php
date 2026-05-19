<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método não permitido.';
    exit;
}

$fullName = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['telefone'] ?? '');
$password = $_POST['senha'] ?? '';

if ($fullName === '' || $email === '' || $phone === '' || $password === '') {
    echo 'Todos os campos são obrigatórios.';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo 'Informe um e-mail válido.';
    exit;
}

if (strlen($password) < 6) {
    echo 'A senha deve ter pelo menos 6 caracteres.';
    exit;
}

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare('SELECT id FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        echo 'Este e-mail já está cadastrado.';
        exit;
    }

    $stmt = $pdo->prepare('INSERT INTO users (full_name, email, phone, password_hash) VALUES (?, ?, ?, ?)');
    $stmt->execute([$fullName, $email, $phone, $passwordHash]);

    header('Location: ../páginas/login.html');
    exit;
} catch (PDOException $e) {
    http_response_code(500);
    echo 'Erro ao gravar cadastro. Tente novamente mais tarde.';
    exit;
}
