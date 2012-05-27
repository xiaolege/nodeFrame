-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2012 年 05 月 27 日 15:51
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `chat`
--

-- --------------------------------------------------------

--
-- 表的结构 `chat_user`
--

CREATE TABLE `chat_user` (
  `uid` int(11) unsigned NOT NULL auto_increment,
  `user` varchar(30) NOT NULL,
  `pwd` varchar(32) NOT NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

--
-- 导出表中的数据 `chat_user`
--

