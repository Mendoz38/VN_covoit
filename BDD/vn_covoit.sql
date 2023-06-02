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
-- Structure de la table `vn_covoit`
--

CREATE TABLE `vn_covoit` (
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
-- Déchargement des données de la table `vn_covoit`
--

INSERT INTO `vn_covoit` (`id`, `id_membre`, `id_salon`, `reponse_id`, `choix`, `places`, `depart`, `arrivee`, `date_aller`, `heure`, `date_retour`, `nom`, `prenom`, `email`, `telephone`, `genre`, `age`, `contrepartie`, `contrepartie_texte`, `ipdate`, `ipliste`, `vus`, `message`, `date_crea`, `date_modif`) VALUES
(3, 0, 995, 0, 'Recherche', 4, 'Grenoble', '', '', '', '', 'Cédric, Mendoza', '', 'cedric@mendoz.fr', '', 'masc', '35', 'other', 'Tu paies l\'entrée au salon', '', '', 0, '', '0000-00-00', 1653891042),
(20, 3, 8, NULL, 'Recherche', 2, 'Grenoble', '', NULL, '', NULL, 'Mendoza', 'Cédric', NULL, '06 15 03 81 40', 'masc', '40-50', 'shareprice', NULL, '', NULL, 0, NULL, '0000-00-00', NULL),
(19, 3, 8, NULL, 'Propose\n', 4, 'Lyon', '', NULL, '', NULL, 'Mendoza', 'Joe', NULL, '06 15 03 81 40', 'masc', '40-50', 'freeprice', NULL, '', NULL, 0, NULL, '0000-00-00', NULL),
(21, 3, 8, NULL, 'Recherche', 2, 'Paris', '', NULL, '', NULL, 'Mendoza', 'Linda', NULL, '06 15 03 81 40', 'masc', '40-50', 'shareprice', NULL, '', NULL, 0, NULL, '2023-05-31', NULL),
(64, 3, 0, NULL, 'Recherche', 2, '', 'Dégustation de vins natures catalans pour la Sant Jordi', '2023-08-22', '08:00', NULL, 'dfsdfsd', 'Cédric', 'cedric@mendoz.fr', '06 15 03 81 40', 'fem', '50-60', 'Prix libre', NULL, '', NULL, 0, '50 € minimum', '2023-06-02', NULL),
(63, 3, 0, NULL, 'Recherche', 4, 'Lyon', '', '2023-08-23', '06:00', NULL, 'Mendoza', 'Cédric', 'cedric@mendoz.fr', '06 15 03 81 40', 'masc', '40-50', '', NULL, '', NULL, 0, 'Please ti meet you', '2023-06-01', NULL),
(62, NULL, 8, NULL, 'Propose', 3, 'Lyon', 'Salon', '2023-07-21', '05:00', NULL, 'Arnaud', 'Cédric', 'cedric@mendoz.fr', '06 15 03 81 40', 'fem', '50-60', 'Partage des frais', NULL, '', NULL, 0, 'dddd', '2023-05-31', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `vn_covoit`
--
ALTER TABLE `vn_covoit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `vn_covoit`
--
ALTER TABLE `vn_covoit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
