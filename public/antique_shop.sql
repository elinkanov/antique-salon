-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 03 2026 г., 21:12
-- Версия сервера: 10.4.32-MariaDB
-- Версия PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `antique_shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Живопись'),
(2, 'Ювелирные украшения'),
(3, 'Фарфор'),
(4, 'Мебель');

-- --------------------------------------------------------

--
-- Структура таблицы `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_phone` varchar(20) NOT NULL,
  `customer_email` varchar(100) DEFAULT NULL,
  `delivery_method` varchar(50) DEFAULT 'pickup',
  `comment` text DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `items_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`items_json`)),
  `status` enum('new','processing','completed','cancelled') DEFAULT 'new',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `customer_phone`, `customer_email`, `delivery_method`, `comment`, `total_amount`, `items_json`, `status`, `created_at`) VALUES
(1, 'Элина', '89806553403', 'elinanov07@gmail.com', 'pickup', NULL, 310000.00, '{\"0\":{\"id\":1,\"title\":\"Портрет дамы в голубом\",\"price\":185000,\"image\":\"imagescatalog\\/jivopiss\\/damaBlue.png\",\"category\":\"painting\",\"quantity\":1},\"1\":{\"id\":2,\"title\":\"Пейзаж с рекой\",\"price\":125000,\"image\":\"imagescatalog\\/jivopiss\\/reka.png\",\"category\":\"painting\",\"quantity\":1}}', 'new', '2026-05-17 18:52:12'),
(2, 'лина', '89908765656', 'lina@gmail.com', 'pickup', 'fdf', 495000.00, '{\"0\":{\"id\":1,\"title\":\"Портрет дамы в голубом\",\"price\":185000,\"image\":\"imagescatalog\\/jivopiss\\/damaBlue.png\",\"category\":\"painting\",\"quantity\":2},\"1\":{\"id\":2,\"title\":\"Пейзаж с рекой\",\"price\":125000,\"image\":\"imagescatalog\\/jivopiss\\/reka.png\",\"category\":\"painting\",\"quantity\":1}}', 'new', '2026-05-17 18:58:40'),
(3, 'lina', '89806553403', 'elinanov07@gmail.com', 'delivery', NULL, 1625000.00, '{\"0\":{\"id\":1,\"title\":\"Портрет дамы в голубом\",\"price\":185000,\"image\":\"imagescatalog\\/jivopiss\\/damaBlue.png\",\"category\":\"painting\",\"quantity\":2},\"1\":{\"id\":6,\"title\":\"Цветы в вазе\",\"price\":135000,\"image\":\"imagescatalog\\/jivopiss\\/flowers.png\",\"quantity\":1},\"2\":{\"id\":12,\"title\":\"Колье с жемчугом\",\"price\":125000,\"image\":\"imagescatalog\\/jewerly\\/pearlNecklace.jpg\",\"quantity\":1},\"3\":{\"id\":11,\"title\":\"Брошь с аметистами\",\"price\":45000,\"image\":\"imagescatalog\\/jewerly\\/broochAmethyst.jpg\",\"quantity\":1},\"4\":{\"id\":5,\"title\":\"Портрет офицера\",\"price\":295000,\"image\":\"imagescatalog\\/jivopiss\\/oficer.png\",\"quantity\":1},\"5\":{\"id\":4,\"title\":\"Морской пейзаж\",\"price\":165000,\"image\":\"imagescatalog\\/jivopiss\\/parusnik.png\",\"quantity\":1},\"6\":{\"id\":3,\"title\":\"Натюрморт с фруктами\",\"price\":245000,\"image\":\"imagescatalog\\/jivopiss\\/fruits.png\",\"quantity\":2}}', 'new', '2026-05-18 17:07:32'),
(4, 'элина', '89806553403', NULL, 'pickup', NULL, 185000.00, '{\"0\":{\"id\":1,\"title\":\"Портрет дамы в голубом\",\"price\":185000,\"image\":\"imagescatalog\\/jivopiss\\/damaBlue.png\",\"quantity\":1}}', 'new', '2026-05-18 20:16:23'),
(5, 'элина22', '88954904955', 'lina@gmail.com', 'delivery', 'dikfkfdkkf', 220000.00, '{\"0\":{\"id\":1,\"title\":\"Портрет дамы в голубом\",\"price\":185000,\"image\":\"imagescatalog\\/jivopiss\\/damaBlue.png\",\"quantity\":1},\"1\":{\"id\":21,\"title\":\"Ваза с росписью\",\"price\":35000,\"image\":\"imagescatalog\\/farfor\\/paintedVase.jpg\",\"quantity\":1}}', 'new', '2026-05-20 12:47:16'),
(6, 'лина', '89908276767', 'linnn@gmail.com', 'delivery', '....', 385000.00, '{\"0\":{\"id\":2,\"title\":\"Пейзаж с рекой\",\"price\":125000,\"image\":\"imagescatalog\\/jivopiss\\/reka.png\",\"category\":\"painting\",\"quantity\":2},\"1\":{\"id\":6,\"title\":\"Цветы в вазе\",\"price\":135000,\"image\":\"imagescatalog\\/jivopiss\\/flowers.png\",\"quantity\":1}}', 'new', '2026-05-20 16:39:52'),
(7, 'Элина', '89806335656', 'eli@mail.com', 'pickup', 'fgfdff', 535000.00, '{\"0\":{\"id\":1,\"title\":\"Портрет дамы в голубом\",\"price\":185000,\"image\":\"imagescatalog\\/jivopiss\\/damaBlue.png\",\"category\":\"painting\",\"quantity\":1},\"1\":{\"id\":10,\"title\":\"Вид Венеции\",\"price\":225000,\"image\":\"imagescatalog\\/jivopiss\\/venecia.png\",\"category\":\"painting\",\"quantity\":1},\"2\":{\"id\":2,\"title\":\"Пейзаж с рекой\",\"price\":125000,\"image\":\"imagescatalog\\/jivopiss\\/reka.png\",\"quantity\":1}}', 'new', '2026-06-02 20:51:51');

-- --------------------------------------------------------

--
-- Структура таблицы `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `price_at_purchase` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `image`, `category_id`) VALUES
(1, 'Тестовая картина', 15000.00, 'test1.jpg', 1),
(2, 'Колье с рубином', 45000.00, 'test2.jpg', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Индексы таблицы `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
