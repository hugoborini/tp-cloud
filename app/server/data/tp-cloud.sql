-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  jeu. 22 avr. 2021 à 00:31
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `tp-cloud`
--

-- --------------------------------------------------------

--
-- Structure de la table `absence`
--

CREATE TABLE `absence` (
  `id_absence` int(11) NOT NULL,
  `id_eleve` int(11) NOT NULL,
  `dateStart` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateEnd` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isJustificate` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `assoc_class`
--

CREATE TABLE `assoc_class` (
  `id_assoc_class` int(11) NOT NULL,
  `id_prof` varchar(255) NOT NULL,
  `id_class` varchar(255) NOT NULL,
  `isPrincipal` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `assoc_class`
--

INSERT INTO `assoc_class` (`id_assoc_class`, `id_prof`, `id_class`, `isPrincipal`) VALUES
(1, '1', '1', 1),
(2, '2', '1', 0),
(3, '3', '1', 0),
(4, '1', '2', 0),
(5, '2', '1', 1),
(6, '3', '2', 0);

-- --------------------------------------------------------

--
-- Structure de la table `class`
--

CREATE TABLE `class` (
  `id_class` int(11) NOT NULL,
  `nameClass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `class`
--

INSERT INTO `class` (`id_class`, `nameClass`) VALUES
(1, '5eme a'),
(2, '6eme e');

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

CREATE TABLE `eleve` (
  `id_eleves` int(11) NOT NULL,
  `id_class` int(11) NOT NULL,
  `nameEleve` varchar(255) NOT NULL,
  `lastNameEleve` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `eleve`
--

INSERT INTO `eleve` (`id_eleves`, `id_class`, `nameEleve`, `lastNameEleve`) VALUES
(1, 1, 'hugo', 'borini'),
(2, 1, 'reda', 'hamouche'),
(3, 2, 'hugo', 'cordilliot'),
(4, 2, 'nawel', 'berrichi'),
(5, 2, 'melina', 'chamayou');

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE `matiere` (
  `id_matiere` int(11) NOT NULL,
  `nameMatiere` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`id_matiere`, `nameMatiere`) VALUES
(4, 'anglais'),
(5, 'arabe'),
(3, 'dessin'),
(1, 'maths'),
(2, 'sport');

-- --------------------------------------------------------

--
-- Structure de la table `note`
--

CREATE TABLE `note` (
  `id_notes` int(11) NOT NULL,
  `id_eleve` int(11) NOT NULL,
  `id_matiere` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  `coef` int(11) NOT NULL,
  `dateNote` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_prof` int(11) NOT NULL,
  `id_class` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `note`
--

INSERT INTO `note` (`id_notes`, `id_eleve`, `id_matiere`, `note`, `coef`, `dateNote`, `id_prof`, `id_class`) VALUES
(1, 1, 1, 10, 2, '2021-04-22 00:30:19', 2, 1),
(2, 2, 2, 20, 3, '2021-04-22 00:30:40', 3, 1),
(3, 3, 4, 20, 2, '2021-04-22 00:31:02', 4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `prof`
--

CREATE TABLE `prof` (
  `id_prof` int(11) NOT NULL,
  `id_matiere` int(11) NOT NULL,
  `nameProf` varchar(255) NOT NULL,
  `lastNameProf` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `prof`
--

INSERT INTO `prof` (`id_prof`, `id_matiere`, `nameProf`, `lastNameProf`) VALUES
(5, 1, 'Bastien', 'Calou'),
(6, 5, 'Quentin', 'Grancher'),
(7, 3, 'Clement', 'Guidon'),
(8, 2, 'Tony', 'Hawk');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`id_absence`);

--
-- Index pour la table `assoc_class`
--
ALTER TABLE `assoc_class`
  ADD PRIMARY KEY (`id_assoc_class`);

--
-- Index pour la table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id_class`),
  ADD UNIQUE KEY `nameClass` (`nameClass`);

--
-- Index pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`id_eleves`);

--
-- Index pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`id_matiere`),
  ADD UNIQUE KEY `nameMatiere` (`nameMatiere`);

--
-- Index pour la table `note`
--
ALTER TABLE `note`
  ADD PRIMARY KEY (`id_notes`);

--
-- Index pour la table `prof`
--
ALTER TABLE `prof`
  ADD PRIMARY KEY (`id_prof`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `absence`
--
ALTER TABLE `absence`
  MODIFY `id_absence` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `assoc_class`
--
ALTER TABLE `assoc_class`
  MODIFY `id_assoc_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `class`
--
ALTER TABLE `class`
  MODIFY `id_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `eleve`
--
ALTER TABLE `eleve`
  MODIFY `id_eleves` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `id_matiere` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `note`
--
ALTER TABLE `note`
  MODIFY `id_notes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `prof`
--
ALTER TABLE `prof`
  MODIFY `id_prof` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;