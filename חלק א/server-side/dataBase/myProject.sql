-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: myproject
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `Id` varchar(255) NOT NULL,
  `FirstName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `LastName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Phone` varchar(255) NOT NULL,
  `MobilePhone` varchar(255) NOT NULL,
  `Img` varchar(45) DEFAULT NULL,
  `DateOfBirth` date NOT NULL,
  `City` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Street` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  `Num` int NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('212799241','cohen','yossi','025437657','0548796578','http://localhost:6200/p1.jpg','2001-02-02','jerusalem','hazait',2),('213278930','ben moshe','yael','025712345','0587675467','http://localhost:6200/p1.jpg','2020-02-03','Ashdod','hativat hanegev',9),('213661093','cohen','chaya','026789090','05656765656','http://localhost:6200/p1.jpg','2020-02-02','jerusalem','barash',2),('213849193','madmon','ayala','029898989','0548989898','http://localhost:6200/p1.jpg','2020-02-02','jerusalem','gefen',4),('214090292','madmon','ayala','029898989','0548989898','http://localhost:6200/p1.jpg','2020-02-02','jerusalem','gefen',4),('214212508','cohen','chaya','026789090','05656765656','http://localhost:6200/p1.jpg','2020-02-02','jerusalem','barash',2),('214356016','levi','rachel','029876598','0567483298','http://localhost:6200/p2.jpg','1994-04-02','jerusalem','navon',4),('214417941','levi','lea','026567887','0543241342','http://localhost:6200/p3.jpg','2000-06-12','jerusaem','gefen',4),('214418618','levi','ari','026554356','0503298909','http://localhost:6200/p1.jpg','2018-03-29','jerusalem','gefen',3),('214427544','madmon','ayala','029898989','0548989898','http://localhost:6200/p1.jpg','2018-03-29','jerusalem','gefen',4),('328802152','ben moshe','ya','025712345','0587675467','http://localhost:6200/p1.jpg','2020-02-03','Ashdod','hativat hanegev',9),('328802186','ben moshe','ya','025712345','0587675467','http://localhost:6200/p1.jpg','2020-02-03','Ashdod','hativat hanegev',9),('331705459','choen','ayala','026446012','0533156523','http://localhost:6200/p3.jpg','1991-02-02','ashkelon','havatselet',9);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailsaboutcovid`
--

DROP TABLE IF EXISTS `detailsaboutcovid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailsaboutcovid` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `CustomerId` varchar(255) DEFAULT NULL,
  `DateOfVaccination1` date DEFAULT NULL,
  `DateOfVaccination2` date DEFAULT NULL,
  `DateOfVaccination3` date DEFAULT NULL,
  `DateOfVaccination4` date DEFAULT NULL,
  `VaccineManufacturer1` int DEFAULT NULL,
  `VaccineManufacturer2` int DEFAULT NULL,
  `VaccineManufacturer3` int DEFAULT NULL,
  `VaccineManufacturer4` int DEFAULT NULL,
  `PositiveResultDate` date DEFAULT NULL,
  `RecoveryDate` date DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `CustomerId` (`CustomerId`),
  KEY `VaccineManufacturer1` (`VaccineManufacturer1`),
  KEY `VaccineManufacturer2` (`VaccineManufacturer2`),
  KEY `VaccineManufacturer3` (`VaccineManufacturer3`),
  KEY `VaccineManufacturer4` (`VaccineManufacturer4`),
  CONSTRAINT `detailsaboutcovid_ibfk_1` FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`Id`),
  CONSTRAINT `detailsaboutcovid_ibfk_2` FOREIGN KEY (`VaccineManufacturer1`) REFERENCES `vaccinemanufacturer` (`Id`),
  CONSTRAINT `detailsaboutcovid_ibfk_3` FOREIGN KEY (`VaccineManufacturer2`) REFERENCES `vaccinemanufacturer` (`Id`),
  CONSTRAINT `detailsaboutcovid_ibfk_4` FOREIGN KEY (`VaccineManufacturer3`) REFERENCES `vaccinemanufacturer` (`Id`),
  CONSTRAINT `detailsaboutcovid_ibfk_5` FOREIGN KEY (`VaccineManufacturer4`) REFERENCES `vaccinemanufacturer` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailsaboutcovid`
--

LOCK TABLES `detailsaboutcovid` WRITE;
/*!40000 ALTER TABLE `detailsaboutcovid` DISABLE KEYS */;
INSERT INTO `detailsaboutcovid` VALUES (1,'331705459','2020-02-03',NULL,NULL,NULL,1,NULL,NULL,NULL,'2020-01-01','2020-01-15'),(2,'328802152',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2020-05-11',NULL),(3,'212799241',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-05-11',NULL);
/*!40000 ALTER TABLE `detailsaboutcovid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccinemanufacturer`
--

DROP TABLE IF EXISTS `vaccinemanufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccinemanufacturer` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `ManufacturerName` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccinemanufacturer`
--

LOCK TABLES `vaccinemanufacturer` WRITE;
/*!40000 ALTER TABLE `vaccinemanufacturer` DISABLE KEYS */;
INSERT INTO `vaccinemanufacturer` VALUES (1,'Pfizer'),(2,'Moderna'),(3,'AstraZeneca'),(4,'Sinvac'),(5,'Sinopharm'),(6,'Sputnik-Lite'),(7,'Sputnik-V'),(8,'Johnson and Johnson');
/*!40000 ALTER TABLE `vaccinemanufacturer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 14:52:17
