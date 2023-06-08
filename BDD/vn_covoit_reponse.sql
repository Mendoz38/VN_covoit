-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  ven. 02 juin 2023 à 07:54
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
-- Structure de la table `vn_covoit_reponse`
--

CREATE TABLE `vn_covoit_reponse` (
  `id` int(11) NOT NULL,
  `id_membre` int(11) DEFAULT NULL,
  `id_salon` int(11) DEFAULT NULL,
  `reponse_id` int(11) DEFAULT NULL,
  `choix` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `places` int(11) DEFAULT NULL,
  `depart` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `arrivee` varchar(100) COLLATE latin1_german2_ci NOT NULL,
  `date_aller` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `heure` varchar(5) COLLATE latin1_german2_ci NOT NULL,
  `date_retour` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `nom` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `prenom` varchar(50) COLLATE latin1_german2_ci NOT NULL,
  `email` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `telephone` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `genre` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `age` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `contrepartie` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `contrepartie_texte` text COLLATE latin1_german2_ci,
  `ipdate` varchar(255) COLLATE latin1_german2_ci DEFAULT '',
  `ipliste` text COLLATE latin1_german2_ci,
  `vus` int(11) DEFAULT '0',
  `message` text COLLATE latin1_german2_ci,
  `date_crea` date DEFAULT NULL,
  `date_modif` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_german2_ci;

--
-- Déchargement des données de la table `vn_covoit_reponse`
--

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `vn_covoit_reponse`
--
ALTER TABLE `vn_covoit_reponse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `vn_covoit_reponse`
--
ALTER TABLE `vn_covoit_reponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
