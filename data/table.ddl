CREATE TABLE IF NOT EXISTS `imock_log`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `page_id` VARCHAR(200),
   `time` VARCHAR(200),
   `name` VARCHAR(200),
   `person` VARCHAR(200),
   `difficulty` VARCHAR(200),
   `duration` VARCHAR(200),
   `score` VARCHAR(200),
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;