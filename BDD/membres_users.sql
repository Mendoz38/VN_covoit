-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 02 juin 2023 à 07:55
-- Version du serveur :  5.7.14
-- Version de PHP :  7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `vinsnaturels`
--

-- --------------------------------------------------------

--
-- Structure de la table `membres_users`
--

CREATE TABLE `membres_users` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `agetoken` int(11) NOT NULL,
  `membre_grade` varchar(255) NOT NULL DEFAULT '',
  `profession` varchar(255) NOT NULL DEFAULT '',
  `entreprise` varchar(255) NOT NULL,
  `pro` varchar(255) NOT NULL,
  `id_commerce` varchar(255) NOT NULL,
  `id_dossier` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `logo_fond` varchar(255) NOT NULL,
  `mail_envoye` varchar(255) NOT NULL,
  `remember_token` varchar(255) NOT NULL,
  `id_commerce2` varchar(255) NOT NULL,
  `id_dossier2` varchar(255) NOT NULL,
  `id_commerce3` varchar(255) NOT NULL,
  `id_dossier3` varchar(255) NOT NULL,
  `jok4` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date_inscription` bigint(20) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `membres_users`
--

INSERT INTO `membres_users` (`id`, `nom`, `prenom`, `mail`, `pwd`, `token`, `agetoken`, `membre_grade`, `profession`, `entreprise`, `pro`, `id_commerce`, `id_dossier`, `pseudo`, `logo`, `logo_fond`, `mail_envoye`, `remember_token`, `id_commerce2`, `id_dossier2`, `id_commerce3`, `id_dossier3`, `jok4`, `ville`, `pays`, `description`, `date_inscription`) VALUES
(3, 'Mendoza', 'Cédric', 'ced@ced.fr', '$2y$10$8xJuZxSVh3ND17mWA6C5COHvCsDYXdgR3mimjKToQemgLu//DTd1a', '8AIyq9esKcpHG7U2yYsr5gUaLhjAHk', 1683958963, '1', 'vigneron', '260', 'pro', '308', 'com_boutiques', 'Mendoz', 'face-3.jpg', '', '', 't5vey0nk1f5z246ous7rx7i102kk3qdf9fai9rqzpac8s9hdcn7nf2ifsydch2rmbi16l2uvr8zl38hnykt1ze84t5p50yjqpu8kld5trfwm5u36mo0n2n3wz01gg2q9obsg40tv6lghrhw7dmwxapembshcqxezlxxvt63iilovdmoaw4euy1ysm4jopajbjdtblp7xv53jk64hi9u78e73ebgcpnafqjvxc6sow0wqcbkr4z1a9ujgyg', '25', 'com_boutiques', '', '', '', 'Grenoble', 'France', '', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `membres_users`
--
ALTER TABLE `membres_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `membres_users`
--
ALTER TABLE `membres_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
