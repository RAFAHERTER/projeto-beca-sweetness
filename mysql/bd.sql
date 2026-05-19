-- Banco de dados para armazenar os cadastros do site Beca Sweetness.
-- Use um backend para inserir dados com senha em hash seguro (bcrypt, Argon2 etc.).

CREATE DATABASE IF NOT EXISTS `beca_sweetness` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `beca_sweetness`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone` VARCHAR(25) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserção de exemplo:
-- INSERT INTO `users` (`full_name`, `email`, `phone`, `password_hash`)
-- VALUES ('Maria da Silva', 'maria@example.com', '(19) 99999-9999', '$2y$12$...');
